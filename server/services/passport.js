const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT strategy
const jwtOptions = {};

//Create JWT strategy
const jwtLogin = new JwtStrategy (jwtOptions, function(payload, done){
// See if the user ID in the payload exists in our database
// If it does, call 'done wiht that other
//otherwise, call donw without a user object

User.findById(payload.sub, function(err,user){
    if(err) {return done(err,false);}

    if (user) {
        done(null, user);
    } else {
        done(null,false);
    }
});

});
