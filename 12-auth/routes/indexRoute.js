const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("home", {
        title: "PassportJS - Главная",
        user: req.user
    });
});

module.exports = router;