var db = require('../fn/dbAccess');

module.exports.add = (a) => {
    var sql = `insert into giaodich(makhach, sotien, conggiaodich, diachi) values (${a.makhach},${a.sotien},${a.conggiaodich},N'${a.diachi}')`;
    return db.save(sql);
}

module.exports.max = (id) => {
    var sql = `SELECT MAX(magiaodich) as m FROM giaodich where makhach=${id}`;
    return db.load(sql);
}