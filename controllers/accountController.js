var express = require('express'),
	SHA256 = require('crypto-js/sha256'),
    moment = require('moment');

var accountRepo = require('../repos/accountRepo');
var restrict = require('../middle-wares/restrict');

var router = express.Router();

var brandRepo = require('../repos/brandRepo');
    productRepo = require('../repos/productRepo');
    pro_BillRepo = require('../repos/pro_BillRepo');
    order = require('../repos/orderRepo')

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
        productRepo.loadById(req.query.Ma).then(row => {
            var v = {
                view: row[0].luotxem + 1,
                proID: row[0].masanpham
            };
            productRepo.updateView(v);
        })
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
            countProduct: result.products.length
        });
    })
});

router.get('/History', (req, res) => {
    // Cái loadbyUser() là load dữ liệu theo mã thành viên,
    // truyền vào phải là mã thành viên đang đăng nhập
    order.loadbyUser(req.session.user.mathanhvien).then (row =>{
        res.render('account/History',{
            his: row
        });
        console.log(row);
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
           console.log(req.session);

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

router.post('/Chi_tiet',(req, res) => {
    res.redirect(req.headers.referer);
});

router.post('/Gio_hang',(req, res) => {
    

    // user1 truyền vào là mã thành viên đang đăng nhập
    var donhang = {
        user1: req.session.user.mathanhvien,
        Sum: req.body.money,
    };

    order.add(donhang);
    order.max().then( result => {
        var pro_Qua = {
            madon: result[0].m,
            pro: req.body.proID,
            Qua: req.body.proQua
        };
        for(var i = 0; i < pro_Qua.pro.length;i++)
        {
            var pro_Qua1 = {
                madon: pro_Qua.madon,
                pro: pro_Qua.pro[i],
                proQua: pro_Qua.Qua[i]
            };
            productRepo.loadById(pro_Qua1.pro).then( row =>{
                var up = {
                    QuatBuy: parseInt(row[0].luotmua) +parseInt( pro_Qua1.proQua),
                    Quant: parseInt(row[0].soluong) - parseInt(pro_Qua1.proQua),
                    proID: pro_Qua1.pro
                };
                console.log(up);
                productRepo.updateQua(up);
                pro_BillRepo.add(pro_Qua1); 
            });             
        }
    });

    res.redirect(req.headers.referer);
});


module.exports.router = router;