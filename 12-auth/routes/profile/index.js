const express = require('express');
const router = express.Router();
//const User = require('../../models/User_mdb');

router.get('/',
    (req, res, next) => {    
        if (!req.isAuthenticated || !req.isAuthenticated()) {
              if (req.session) {
                req.session.returnTo = req.originalUrl || req.url
              }
              return res.redirect('/login')
            }
            next()
    },
    (req, res) => {
        res.render('profile',
            {
                title: "Profile passportJS",
                user: req.user
            })    
    }
);

module.exports = router;


