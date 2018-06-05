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
            res.render('error/index');
            return;
        }
        res.render('home', {
            brands: result.brands,
            topView: result.topView,
            topSell: result.topSell,
            topPopular: result.topPopular
        });
    })
});

router.get('/Tat_ca/', (req, res) => {
    loadAll(req.query.DanhMuc, req.query.ThuongHieu).then((result) => {
        res.render('Tat_ca', {
            brands: result.brands,
            products: result.products,
            countProduct: result.products.lenght
        });
    })
});

router.get('/Chi_tiet/', (req, res) => {
    if (req.query.Ma == undefined) {
        res.render('Tat_ca');
        return;
    }
    loadDetail(req.query.Ma).then((result) => {
        res.render('Chi_tiet', {
            product: result.product,
            sameBrands: result.sameBrands,
            sameCategories: result.sameCategories
        });
    })
});


module.exports.router = router;