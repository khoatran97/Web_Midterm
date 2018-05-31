var db = require('../fn/dbAccess');

exports.add = user => {
    var sql = `insert into thanhvien(username, password, tenthanhvien, email, ngaysinh, quyenhan, gioitinh, sdt, diachi) values('${user.username}', '${user.password}', '${user.name}', '${user.email}', '${user.dob}', ${user.permission}, ${user.gender}, ${user.tel}, '${user.address}');`;
    return db.save(sql);
}