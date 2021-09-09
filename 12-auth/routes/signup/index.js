const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require('../../models/User_mdb');

router.get('/', (req, res) => {    
            res.render('register', {
                title: "SignUp passportJS",
            })
});

router.post('/', (req, res) => {
    User.register(new User({ username: req.body.username, displayName: req.body.name, email: req.body.email }),
        req.body.password, function (err, user) {
            if (err) {
                return res.render('register', { user : user });
            }
        
            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
    });
}
);

module.exports = router;


