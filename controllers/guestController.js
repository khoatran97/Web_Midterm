var express = require('express');

var router = express.Router();

// GET
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/tat_ca', (req, res) => {
    res.render('Tat_ca');
});

router.get('/register', (req, res) => {
    res.render('register', {layout:false});
});

router.get('/login', (req, res) => {
    res.render('login', {layout:false});
});

module.exports.router = router;