var express = require('express');
var brandRepo = require('../repos/brandRepo');
var productRepo = require('../repos/productRepo');

var router = express.Router();

router.get('/', (req, res) => {
	productRepo.loadAll().then(rows => {
		res.render('admin/index', {products: rows, layout: 'admin'});
	})
});

router.get('/categories', (req, res) => {
	res.render('admin/categories', {layout: 'admin'});
});

router.get('/orders', (req, res) => {
	res.render('admin/orders', {layout: 'admin'});
});

router.get('/products', (req, res) => {
	res.render('admin/products', {layout: 'admin'});
});

router.get('/suppliers', (req, res) => {
	res.render('admin/suppliers', {layout: 'admin'});
});

router.post('/logout', (req, res) => {
    req.session.isLogged=false,
    req.session.user=null;
    req.session.cart=[];
    res.redirect(req.headers.referer);
});

module.exports.router = router;