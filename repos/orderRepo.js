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

module.exports.loadDetail = (id) => {
    var sql = `select s.*, sd.* from donhang d, sanpham_donhang sd, sanpham s where d.madon=${id} and d.madon=sd.madon
    and sd.masanpham=s.masanpham`;
    return db.load(sql);
}