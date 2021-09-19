const express = require('express');
const router = express.Router();
const passport = require('passport')
//const User = require('../../models/User_mdb');

router.get('/', (req, res) => {    
            res.render('login', {
                title: "Login passportJS",
            })
});

router.post('/',
    passport.authenticate(
        'local',
        {
          failureRedirect: '/login',
        },
    ),
     (req, res) => {
   
        console.log("req.user: ", req.user)
        res.redirect('/')
   
});

module.exports = router;

