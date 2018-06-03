var express = require('express');
var brandRepo = require('../repos/brandRepo');
var productRepo = require('../repos/productRepo');

var router = express.Router();

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
async function loadAll() {
    var brands;
    var products;

    await brandRepo.loadAll().then(rows => {
        brands = rows;
    });

    await productRepo.loadAll().then(rows => {
        products = rows;
    });

    return {
        brands: brands,
        products: products,
        countProduct: Object.keys(products).length
    };
}

// GET
router.get('/', (req, res) => {
    loadHome().then((result) => {
        res.render('home', {
            brands: result.brands,
            topView: result.topView,
            topSell: result.topSell,
            topPopular: result.topPopular
        });
    })
});

router.get('/tat_ca', (req, res) => {
    loadAll().then((result) => {
        res.render('Tat_ca', {
            brands: result.brands,
            products: result.products,
            countProduct: result.products.lenght
        });
    })
});

module.exports.router = router;