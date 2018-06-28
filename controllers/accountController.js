var express = require('express'),
	SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var accountRepo = require('../repos/accountRepo');
var restrict = require('../middle-wares/restrict');

var router = express.Router();

var brandRepo = require('../repos/brandRepo');
var productRepo = require('../repos/productRepo');
var pro_BillRepo = require('../repos/pro_BillRepo');
var order = require('../repos/orderRepo');
var cartRepo = require('../repos/cartRepo');
var billRepo = require('../repos/billRepo');

// GET

router.get('/History', (req, res) => {
    // Cái loadbyUser() là load dữ liệu theo mã thành viên,
    // truyền vào phải là mã thành viên đang đăng nhập
    order.loadbyUser(req.session.user.mathanhvien).then (row =>{
        for(var i = 0; i < row.length/2; i++)
        {
            var tmp = row[i];
            row[i] = row[row.length - 1 - i];
            row[row.length - 1 - i] = tmp;
        }
        res.render('account/History',{
            his: row
        });
    })
});

router.get('/Hoa_don', (req, res) => {
    if (req.query.Ma == undefined) {
        res.render('account/Hoa_don');
        return;
    }
    pro_BillRepo.loadByMadon(req.query.Ma).then(row => {
        res.render('account/Hoa_don', {
            vm: row,
            vmMadon: row[0].madon,
            vmNgay: row[0].ngaydat
        });
    })
});

router.get('/Gio_hang', (req, res) => {
    if(req.session.cart.length)
    {
        var cart=[];
        for(var i=0;i<req.session.cart.length;i++){
            var proCart = req.session.cart[i];
            var proDB = productRepo.single(proCart.proID);
            cart.push(proDB);
        }

        var itemlist = [];
        var total=0;
        Promise.all(cart).then(result => {
            for(var i =result.length-1;i>=0;i--){
                var prod = result[i];

                var item = {
                    product: prod,
                    Quantity: req.session.cart[i].Quantity,
                    Cost: prod.gia * req.session.cart[i].Quantity,
                    stock: prod.soluong - prod.luotmua
                };
                total += prod.gia * req.session.cart[i].Quantity;
                itemlist.push(item);
            }
            var vm = {
                items: itemlist,
                total: total
            }
            res.render('account/Gio_hang', vm);
        })   
    }
    else{
        res.render('account/Gio_hang', {noItem:true});
    }
    
});

router.get('/register', (req, res) => {
    res.render('account/register', {layout:false});
});

router.get('/login', (req, res) => {
    res.render('account/login');
});

router.get('/profile', restrict.profile, (req, res) => {
    res.render('account/profile');
});

router.get('/Thanh_toan',(req,res) => {
    res.render('account/Thanh_toan');
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

router.post('/cart/add',(req, res) => {
    var pro = {
        proID: req.body.proID,
        Quantity: +req.body.quant
    };
    cartRepo.add(req.session.cart, pro);
    res.redirect(req.headers.referer);
});

router.post('/cart/remove', (req, res) => {
    cartRepo.remove(req.session.cart, req.body.ProId);
    res.redirect(req.headers.referer);
})

router.post('/cart/update', (req,res) => {
    
    var quant = req.body.quantity;
    var l = quant.length;
    for(var i=0;i<l;i++)
    {
        req.session.cart[l-i-1].Quantity=quant[i];
    }
    Promise.all(req.session.cart).then(result => {
        res.redirect(req.headers.referer);
    })
})

router.post('/Gio_hang',(req, res) => {
    var total = req.body.total;
    var quant = req.body.quantity;
    var l = quant.length;
    for(var i=0;i<l;i++)
    {
        req.session.cart[l-i-1].Quantity=quant[i];
    }
    
    Promise.all(req.session.cart).then(result => {
        var url = '/account/Thanh_toan?total=' + total;
        res.redirect(url);
    });
   
});

router.post('/Thanh_toan',(req, res) =>{
    var bill = {
        makhach: req.session.user.mathanhvien,
        sotien: req.query.total,
        diachi: req.body.address + ' - '+ req.body.qh + ' - ' + req.body.tp,
        conggiaodich: req.body.thanhtoan,
    };
    
    billRepo.add(bill);

    billRepo.max(bill.makhach).then(a =>{
        order.add(bill.makhach,a[0].m, bill.sotien).then( result => {
            order.max(bill.makhach).then(r => {
                var Ma=r[0].m;
                var pro_order = {
                    madon: r[0].m,
                    pro: req.session.cart
                };

                for(var i = 0; i < pro_order.pro.length;i++)
                {
                    var pro_order1 = {
                        madon: pro_order.madon,
                        pro: pro_order.pro[i].proID,
                        proQua: pro_order.pro[i].Quantity
                    };
                    pro_BillRepo.add(pro_order1); 
                    productRepo.loadById(pro_order1.pro).then( row =>{
                        var up = {
                            QuatBuy: parseInt(row[0].luotmua) +parseInt( pro_order1.proQua),
                            proID: pro_order1.pro
                        };
                        productRepo.updateQua(up);
                    });             
                }
                req.session.cart=[];
                res.redirect('/account/Hoa_don?Ma=' + Ma);
            })
        })
    })
      
});
module.exports.router = router;