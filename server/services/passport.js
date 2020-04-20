const passport = require('passport');
const User = require('../models/users');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy for sign in
// Specify email property for username
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
// Verify this email and password, call done with user
// if it is the correct email and password
// otherwise, call done with false

User.findOne({email:email.toLowerCase()}, function(err, user){
    // search error
    if(err) {return done(err);}
    // user not found
    if(!user) {return done(null, false);}

    // compare passwords - is 'password' equal to user.password?
    user.comparePassword(password, function(err, isMatch){
        if (err) {return done(err); }
       
        if(!isMatch) {return done(null, false, { error: 'Your login details could not be verified. Please try again.' });}

        return done(null, user);
    });
});
});

// Setup configuration options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// Create JWT strategy for handling authorization with token
const jwtLogin = new JwtStrategy (jwtOptions, function(payload, done){
// Payload is the decoded jwt token
// See if the user ID in the payload exists in our database
// If it does, call 'done with that other
//otherwise, call done without a user object

User.findById(payload.sub, function(err,user){
    
    // if search process fails
    if(err) {return done(err,false);}
    // if user found
    if (user) {
        done(null, user);
    // if user not found
    } else {
        done(null,false);
    }
});

});

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);