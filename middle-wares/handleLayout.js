var categoryRepo = require('../repos/categoryRepo');
var productRepo = require('../repos/productRepo');
module.exports = (req, res, next) => {
	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
	}

    productRepo.loadAll().then(rows => {
        req.session.Sumproduct = rows.length;
    });

    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.user,
            cart: req.session.cart,
            Sumproduct: req.session.Sumproduct
        };
        if(req.session.user!=null && req.session.user.quyenhan===1){
            res.locals.isAdmin=true
        };
	next();
    });
};