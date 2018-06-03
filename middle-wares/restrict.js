exports.profile = (req, res, next) => {
    if (req.session.isLogged === true) {
        next();
    } else {
        res.redirect(`/account/login?retUrl=${req.originalUrl}`);
    }
}

exports.admin = (req, res, next) => {
    if (req.session.isLogged === true && req.session.user.quyenhan===1) {
        next();
    } else {
        res.redirect(`/account/login?retUrl=${req.originalUrl}`);
    }
}