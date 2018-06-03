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
    res.render('account/login');
});

router.get('/profile', restrict.profile, (req, res) => {
    res.render('account/profile');
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
    
    accountRepo.loadAll().then(rows => {
    	for(var i=0;i<rows.length;i++){
    		if(rows[i].username===user.username){
    			var vm={
		    		layout: false,
		    		matched: true,
                    fail:true
		    	};
    			res.render('account/register', vm);
    			return;
    		}
    	}

	    accountRepo.add(user).then(value => {
	    	var vm={
	    		layout: false,
	    		matched: false,
                success:true
	    	}
	        res.render('account/register', vm);
	    });
    });
});

router.post('/login',(req,res) => {
	var user = {
        username: req.body.username,
        password: SHA256(req.body.password).toString()
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
            accountRepo.loadAll().then(rows => {
                for(var i=0;i<rows.length;i++){
                    if(rows[i].username === user.username){
                        res.render('account/login', {passWrong:true});
                    }
                    else{
                        res.render('account/login', {notExist:true});
                    }
                }
            })
            
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.isLogged=false,
    req.session.user=null;
    req.session.cart=[];
    res.redirect(req.headers.referer);
});

router.post('/profile', (req, res) => {
    var dob = moment(req.body.DOB, 'D/M/YYYY')
        .format('YYYY-MM-DDTHH:mm');

    var user = {
        id: req.session.user.mathanhvien,
        name: req.body.name,
        email: req.session.user.email,
        DOB: dob,
        gender: req.body.gender,
        tel: req.body.tel,
        address: req.body.address
    };

    accountRepo.update(user).then(value => {
        accountRepo.single(user.id).then(rows => {
            if (rows.length > 0) {
                req.session.user=rows[0];
                res.redirect(req.headers.referer);
            }
        });
    })
});

module.exports.router = router;