var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from sanpham`;
	return db.load(sql);
}

module.exports.loadByView = () => {
    var sql = `select * from sanpham order by luotxem desc `
    return db.load(sql);
}

module.exports.loadBySell = () => {
    var sql = `select * from sanpham order by luotmua desc limit 10`
    return db.load(sql);
}

module.exports.loadByPopular = () => {
    var sql = `select * from sanpham order by luotmua desc, luotxem desc limit 16`
    return db.load(sql);
}