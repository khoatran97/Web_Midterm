var express = require('express'),
	SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var accountRepo = require('../repos/accountRepo');
var restrict = require('../middle-wares/restrict');

var router = express.Router();

var brandRepo = require('../repos/brandRepo');
var productRepo = require('../repos/productRepo');

var isReady = false;

// Load du lieu cho trang Home
async function loadHome() {
    var brands;
    var topView;
    var topSell;
    var topPopular;

    await brandRepo.loadAll().then(rows => {
        brands = rows;
    });

    await productRepo.loadByView().then(rows => {
        topView = rows;
    })

    await productRepo.loadBySell().then(rows => {
        topSell = rows;
    })

    await productRepo.loadByPopular().then(rows => {
        topPopular = rows;
    })

    return {
        brands: brands,
        topView: topView,
        topSell: topSell,
        topPopular: topPopular
    }
}
// Load du lieu cho trang tat ca san pham
async function loadAll(categoryId, brandId) {
    var brands;
    var products;

    await brandRepo.loadAll().then(rows => {
        brands = rows;
    });

    if (brandId != undefined && categoryId != undefined) {
        await productRepo.loadByCategoryBrand(categoryId, brandId).then(rows => {
            products = rows;
        });
    }
    else if (brandId != undefined) {
        await productRepo.loadByBrand(brandId).then(rows => {
            products = rows;
        });
    }
    else if (categoryId != undefined) {
        await productRepo.loadByCategory(categoryId).then(rows => {
            products = rows;
        });
    }
    else {
        await productRepo.loadAll().then(rows => {
            products = rows;
        });
    }

    return {
        brands: brands,
        products: products,
        countProduct: Object.keys(products).length
    };
}
async function loadDetail(productId) {
    var product;
    var sameBrands;
    var sameCategories;

    await productRepo.loadById(productId).then((rows) => {
        product = rows[0];
    })

    await productRepo.loadByBrand(product.mathuonghieu, 10).then((rows) => {
        sameBrands = rows;
    })

    await productRepo.loadByCategory(product.maloai, 10).then((rows) => {
        sameCategories = rows;
    })

    return {
        product: product,
        sameBrands: sameBrands,
        sameCategories: sameCategories
    };
}


// GET
router.get('/', (req, res) => {
    loadHome().then((result) => {
        if (result == null) {
            res.render('/');
            return;
        }
        res.render('account/index', {
            brands: result.brands,
            topView: result.topView,
            topSell: result.topSell,
            topPopular: result.topPopular
        });
    })
});

router.get('/Chi_tiet/', (req, res) => {
    if (req.query.Ma == undefined) {
        res.render('account/Tat_ca');
        return;
    }
    loadDetail(req.query.Ma).then((result) => {
        res.render('account/Chi_tiet', {
            product: result.product,
            sameBrands: result.sameBrands,
            sameCategories: result.sameCategories
        });
    })
});

router.get('/Tat_ca/', (req, res) => {
    loadAll(req.query.DanhMuc, req.query.ThuongHieu).then((result) => {
        res.render('account/Tat_ca', {
            brands: result.brands,
            products: result.products,
            countProduct: result.products.lenght
        });
    })
});

router.get('/History', (req, res) => {
    res.render('account/History');
});

router.get('/Hoa_don', (req, res) => {
    res.render('account/Hoa_don');
});

router.get('/Gio_hang', (req, res) => {
    res.render('account/Gio_hang');
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
            
           // localStorage.setItem('isLogged',true);


            var url = '/';
            if (req.query.retUrl) {
               url = req.query.retUrl;
            }
            console.log(req.session);
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