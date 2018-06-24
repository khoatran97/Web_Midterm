var db = require('../fn/dbAccess');

module.exports.loadByMadon = (a) => {
	var sql=`select * from sanpham_donhang sd, sanpham s, donhang d where d.madon = sd.madon and s.masanpham = sd.masanpham and sd.madon = ${a}`;
	return db.load(sql);
}

module.exports.add = (a) => {
	var sql=`insert into sanpham_donhang values(${a.madon},${a.pro},${a.proQua})`;
	return db.save(sql);
}



