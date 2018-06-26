var db = require('../fn/dbAccess');

module.exports.add = (a) => {
    var sql = `insert into giaodich values (${a.magiaodich},null,null,${a.conggiaodich},N'${a.diachi}')`;
    return db.save(sql);
}