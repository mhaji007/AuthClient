const passport = require('passport');
const User = require('../models/users');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy for sign in
const localLogin = new localStrategy({usernameField: 'email'}, function(email, password, done){
// Verify this username and password, call done with user
// if it is the correct username and password
// otherwise, call done with false
})

// Setup configuration options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWT strategy fro handling authorization with token
const jwtLogin = new JwtStrategy (jwtOptions, function(payload, done){
// Payload is the decoded jwt token
// See if the user ID in the payload exists in our database
// If it does, call 'done wiht that other
//otherwise, call donw without a user object

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