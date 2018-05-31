var express = require('express');

var router = express.Router();

// GET
router.get('/', (req, res) => {
    res.render('home');
});

router.get('/tat_ca', (req, res) => {
    res.render('Tat_ca');
});

module.exports.router = router;