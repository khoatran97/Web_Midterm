var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from donhang`;
	return db.load(sql);
}