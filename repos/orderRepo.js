var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from donhang order by ngaydat desc`;
	return db.load(sql);
}

module.exports.single = (id) => {
	return new Promise((resolve, reject) => {
        var sql = `select * from donhang where madon=${id}`;
        db.load(sql).then(rows => {
            if (rows.length === 0) {
                resolve(null);
            } else {
                resolve(rows[0]);
            }
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports.update = (o) => {
	var sql = `update donhang set trangthai='${o.status}' where madon=${o.id}`;
	return db.save(sql);
}

module.exports.loadbyUser = (user) =>{
    var sql = `select d.madon,DATE_FORMAT(d.ngaydat, '%Y-%m-%d') as ngaydat, d.tonggiatri, d.trangthai, gd.diachi, gd.conggiaodich
    from thanhvien t, donhang d, giaodich gd
    where t.mathanhvien = d.makhachhang and d.makhachhang = ${user} and gd.magiaodich = d.madon`;
    return db.load(sql);
}

module.exports.loadDetail = (id) => {
    var sql = `select s.*, sd.* from donhang d, sanpham_donhang sd, sanpham s where d.madon=${id} and d.madon=sd.madon
    and sd.masanpham=s.masanpham`;
    return db.load(sql);
}

module.exports.add = (a) => {
    var sql = `insert into donhang(makhachhang,magiaodich,ngaydat,tonggiatri,trangthai) values (${a.user1},null,now(),${a.total},0)`;
    return db.save(sql);
}

module.exports.max = (id) => {
    var sql = `SELECT MAX(madon) as m FROM donhang where makhachhang=${id}`;
    return db.load(sql);
}