var categoryRepo = require('../repos/categoryRepo');
module.exports = (req, res, next) => {
	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
	}

    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            isLogged: true,
            curUser: req.session.user,
            cart: req.session.cart
        };
        if(req.session.user!=null && req.session.user.quyenhan===1){
            res.locals.isAdmin=true
        };
        console.log(res.locals.layoutVM);
	next();
    });
};