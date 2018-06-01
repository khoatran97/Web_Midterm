var accountRepo = require('../repos/accountRepo');
module.exports = (req, res, next) => {
	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
	}

    accountRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
            categories: rows,
            suppliers: rows,
            isLogged: req.session.isLogged,
            curUser: req.session.user,
            cart: req.session.cart
        };
	next();
    });
};