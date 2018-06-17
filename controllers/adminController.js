var express = require('express');
var brandRepo = require('../repos/brandRepo');
var productRepo = require('../repos/productRepo');
var orderRepo = require('../repos/orderRepo');
var categoryRepo = require('../repos/categoryRepo');

var router = express.Router();

function formatDate(date){
    var date=new Date(date);
    var d=date.getDate(),
    m=date.getMonth()+1,
    y=date.getFullYear();
    var fDate = d+"/"+m+"/"+y;
    return fDate;
}

router.get('/', (req, res) => {
	res.render('admin/index', {layout: 'admin'});
});
/*********************Loại sản phẩm**************************/
router.get('/categories', (req, res) => {
	categoryRepo.loadAll().then(rows => {
		if(rows[0]!=null){
			res.render('admin/categories', {
			layout: 'admin',
			categories: rows
		});
		}
		else {
			res.render('admin/categories', {layout: 'admin',
			noItem: true});
		}
	});
});

router.post('/categories/add', (req, res) => {
	categoryRepo.add(req.body).then(rows => {
		res.redirect('/admin/categories');
	})
});

router.get('/categories/delete', (req, res) => {
	categoryRepo.single(req.query.id).then(c => {
		var vm={
			layout: 'admin', 
			category: c
		}
        res.render('admin/categories/delete', vm);
    });
});

router.post('/categories/delete', (req, res) => {
	categoryRepo.delete(req.body.id).then(rows => {
		res.redirect('/admin/categories');
	})
});

router.get('/categories/edit', (req, res) => {
	categoryRepo.single(req.query.id).then(c => {
		var vm={
			layout: 'admin', 
			category: c
		}
        res.render('admin/categories/edit', vm);
    });
});

router.post('/categories/edit', (req, res) => {
	categoryRepo.update(req.body).then(rows => {
		res.redirect('/admin/categories');
	})
});

/*********************Đơn hàng**************************/
router.get('/orders', (req, res) => {
	orderRepo.loadAll().then(rows => {
		if(rows[0]!=null){
			var orders=[];
			for(var i=0;i<rows.length;i++){
				rows[i].ngaydat=formatDate(rows[i].ngaydat);
				orders.push(rows[i]);
			}
			res.render('admin/orders', {
				layout: 'admin',
				orders: orders
			});
		}
		else{
			res.render('admin/orders', {layout: 'admin',
			noItem: true});
		}
	});
});

router.get('/orders/edit', (req, res) => {
	var p1=orderRepo.single(req.query.id);
	var p2=orderRepo.loadDetail(req.query.id);
	Promise.all([p1, p2]).then(([order, products]) => {
		order.ngaydat=formatDate(order.ngaydat);
		var vm = {
			layout:'admin',
			order: order,
			products: products
		}
		res.render('admin/orders/edit', vm);
	})
});

router.post('/orders/edit', (req, res) => {
	orderRepo.update(req.body).then(value => {
		res.redirect('/admin/orders');
	})
});

/*********************Sản phẩm**************************/
router.get('/products', (req, res) => {
	productRepo.loadAll().then(rows => {
		if(rows[0]!=null){
			res.render('admin/products', {
				layout: 'admin',
				products: rows
			});
		}
		else{
			res.render('admin/products', {layout: 'admin',
			noItem: true});
		}
	});
});

router.get('/products/add', (req, res) => {
	productRepo.loadbrand().then(rows => {
	    var vm={
			layout: 'admin', 
			product: rows
		}
		res.render('admin/products/add',vm);
	});
});



router.get('/products/delete', (req, res) => {
	productRepo.single(req.query.id).then(p => {
		var vm={
			layout: 'admin', 
			product: p
		}
        res.render('admin/products/delete', vm);
    });
});

router.post('/products/delete', (req, res) => {
	productRepo.delete(req.body.id).then(rows => {
		res.redirect('/admin/products');
	})
});

/*********************Thương hiệu**************************/
router.get('/suppliers', (req, res) => {
	brandRepo.loadAll().then(rows => {
		if(rows[0]!=null){
			res.render('admin/suppliers', {
				layout: 'admin',
				brands: rows
			});
		}
		else{
		res.render('admin/suppliers', {layout: 'admin',
			noItem: true});
		}	
	});
});

router.get('/suppliers/edit', (req, res) => {
	brandRepo.single(req.query.id).then(b => {
		var vm={
			layout: 'admin', 
			brand: b
		}
        res.render('admin/suppliers/edit', vm);
    });
});

router.post('/suppliers/edit', (req, res) => {
	brandRepo.update(req.body).then(rows => {
		res.redirect('/admin/suppliers');
	})
});

router.get('/suppliers/add', (req, res) => {
	res.render('admin/suppliers/add', {layout: 'admin'});
});

router.post('/suppliers/add', (req, res) => {
	brandRepo.add(req.body).then(rows => {
		res.redirect('/admin/suppliers');
	})
});

router.get('/suppliers/delete', (req, res) => {
	brandRepo.single(req.query.id).then(s => {
		var vm={
			layout: 'admin', 
			brand: s
		}
        res.render('admin/suppliers/delete', vm);
    });
});

router.post('/suppliers/delete', (req, res) => {
	brandRepo.delete(req.body.id).then(rows => {
		res.redirect('/admin/suppliers');
	})
});


/*********************Đăng xuất****************************/
router.post('/logout', (req, res) => {
    req.session.isLogged=false,
    req.session.user=null;
    req.session.cart=[];
    res.redirect(req.headers.referer);
});

module.exports.router = router;