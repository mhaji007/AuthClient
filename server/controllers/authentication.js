const user = require('../models/user');

exports.signup = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

   // See of a user with a given email exists
    user.findOne({email:email}, function (err, existingUser) {
        
    });
   // If a user with email does exist, retrun an error

   // If a user with email does not exist, create and save user record

   // Respond to request indicating the user was created
}