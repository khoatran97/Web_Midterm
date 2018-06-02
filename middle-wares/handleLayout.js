var categoryRepo = require('../repos/categoryRepo');
module.exports = (req, res, next) => {
	if (req.session.isLogged === undefined) {
		req.session.isLogged = false;
	}

    categoryRepo.loadAll().then(rows => {
        res.locals.layoutVM = {
<<<<<<< HEAD
=======
            categories: rows,
>>>>>>> 1104e8eb901da2014ad57f0108580ce34dd8f59f
            isLogged: req.session.isLogged,
            curUser: req.session.user,
            cart: req.session.cart
        };
	next();
    });
};