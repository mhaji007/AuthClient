const User = require('../models/users');

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if(!email||!password) {
        return res.status(422).send({error:'You must provide email and password'});
    }

    // See of a user with a given email exists
    User.findOne({
        email: email
    }, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        // If a user with email does exist, return an error
        if (existingUser) {
            return res
                .status(422)
                .send({error: 'Email is in use'});
        }

        // If a user with email does not exist, create and save user record Respond to
        // request indicating the user was created
        const user = new User({email: email, password: password});

        user.save(function (err) {
            if (err) {
                return next(err);
            }
            res.json({success:true});
        });


    });
}
