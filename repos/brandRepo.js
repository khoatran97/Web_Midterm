var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
	var sql=`select * from thuonghieu`;
	return db.load(sql);
}

module.exports.single = (id) => {
	return new Promise((resolve, reject) => {
        var sql = `select * from thuonghieu where mathuonghieu=${id}`;
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
	var sql = `update thuonghieu set tenthuonghieu='${b.name}' where mathuonghieu=${b.id}`;
	return db.save(sql);
}

module.exports.add = (b) => {
    var sql = `insert into thuonghieu(tenthuonghieu) values('${b.name}')`;
    return db.save(sql);
}

module.exports.delete = (id) => {
    var sql = `delete from thuonghieu where mathuonghieu=${id}`;
    return db.save(sql);
}