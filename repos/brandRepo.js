var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from thuonghieu`;
	return db.load(sql);
}