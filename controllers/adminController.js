var express = require('express');
var brandRepo = require('../repos/brandRepo');
var productRepo = require('../repos/productRepo');
var orderRepo = require('../repos/orderRepo');
var categoryRepo = require('../repos/categoryRepo');

var router = express.Router();

router.get('/', (req, res) => {
	res.render('admin/index', {layout: 'admin'});
});

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

router.get('/orders', (req, res) => {
	orderRepo.loadAll().then(rows => {
		if(rows[0]!=null){
		res.render('admin/orders', {
			layout: 'admin',
			orders: rows
		});
		}
		else{
			res.render('admin/orders', {layout: 'admin',
			noItem: true});
		}
	});
});

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

router.post('/logout', (req, res) => {
    req.session.isLogged=false,
    req.session.user=null;
    req.session.cart=[];
    res.redirect(req.headers.referer);
});

module.exports.router = router;