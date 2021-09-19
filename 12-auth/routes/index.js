const express = require('express');
const router = express.Router();
const profile = require('./profile');
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');
const indexRoute = require('./indexRoute');
router.use('/', indexRoute);
router.use('/me', profile);
router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);



module.exports = router;
