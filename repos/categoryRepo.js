var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from loaisanpham`;
	return db.load(sql);
}