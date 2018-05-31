var express = require('express'),
	SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var accountRepo = require('../repos/accountRepo');
var restrict = require('../middle-wares/restrict');

var router = express.Router();

// GET
router.get('/register', (req, res) => {
    res.render('account/register', {layout:false});
});

router.get('/login', (req, res) => {
    res.render('account/login', {layout:false});
});

//post
router.post('/register', (req, res) => {
	
	var dob = moment(req.body.dob, 'D/M/YYYY')
        .format('YYYY-MM-DDTHH:mm');

    var user = {
        username: req.body.username,
        password: SHA256(req.body.password).toString(),
        name: req.body.name,
        tel: req.body.tel,
        email: req.body.email,
        dob: dob,
        permission: 0,
        address:req.body.address,
        gender: req.body.gender
    };
    console.log(user);
    accountRepo.add(user).then(value => {
    	var vm={
    		layout: false,
    		sweet: true
    	}
        res.render('account/register', vm);
    });
});

router.post('/login',(req,res) => {
	var user = {
        username: req.body.username,
        password: SHA256(req.body.rawPWD).toString()
    };

    accountRepo.login(user).then(rows => {
        if (rows.length > 0) {
            req.session.isLogged = true;
            req.session.user = rows[0];
            req.session.cart = [];

            var url = '/';
            if (req.query.retUrl) {
                url = req.query.retUrl;
            }
            res.redirect(url);

        } else {
            var vm = {
                showError: true,
                errorMsg: 'Login failed'
            };
            res.render('account/login', vm);
        }
    });
});

module.exports.router = router;