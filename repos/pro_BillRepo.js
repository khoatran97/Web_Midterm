var db = require('../fn/dbAccess');

module.exports.add = (a) => {
	var sql=`insert into sanpham_donhang values(${a.madon},${a.pro},${a.proQua})`;
	return db.save(sql);
}



