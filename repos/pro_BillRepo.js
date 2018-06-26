var db = require('../fn/dbAccess');

module.exports.loadByMadon = (a) => {
	var sql=`select s.masanpham, s.ten, s.gia, s.chatlieu, s.xuatxu, sd.soluong, d.madon,  DATE_FORMAT(d.ngaydat, '%Y-%m-%d') as ngaydat
	 from sanpham_donhang sd, sanpham s, donhang d 
	 where d.madon = sd.madon and s.masanpham = sd.masanpham and sd.madon = ${a}`;
	return db.load(sql);
}

module.exports.add = (a) => {
	var sql=`insert into sanpham_donhang values(${a.madon},${a.pro},${a.proQua})`;
	return db.save(sql);
}



