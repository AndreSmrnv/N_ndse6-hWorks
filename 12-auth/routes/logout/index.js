const express = require('express');
const router = express.Router();
//const User = require('../../models/User_mdb');

router.use('/',
    (req, res) => {    
        req.logout()
        res.redirect('/')
    }
);

module.exports = router;


