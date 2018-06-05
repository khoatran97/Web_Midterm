var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from loaisanpham`;
	return db.load(sql);
}

module.exports.single = (id) => {
	return new Promise((resolve, reject) => {
        var sql = `select * from loaisanpham where maloai=${id}`;
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

module.exports.update = (b) => {
	var sql = `update loaisanpham set tenloai='${b.name}' where maloai=${b.id}`;
	return db.save(sql);
}

module.exports.add = (b) => {
    var sql = `insert into loaisanpham (tenloai) values ('${b.name}')`;
    return db.save(sql);
}

module.exports.delete = (id) => {
    var sql = `delete from loaisanpham where maloai=${id}`;
    return db.save(sql);
}