var db = require('../fn/dbAccess');

exports.loadAll = () => {
	var sql=`select username from thanhvien`;
	return db.load(sql);
}

exports.add = user => {
    var sql = `insert into thanhvien(username, password, tenthanhvien, email, ngaysinh, quyenhan, gioitinh, sdt, diachi) values('${user.username}', '${user.password}', '${user.name}', '${user.email}', '${user.dob}', ${user.permission}, ${user.gender}, '${user.tel}', '${user.address}');`;
    return db.save(sql);
}

exports.login = user => {
	var sql=`select * from thanhvien where username='${user.username}' and password='${user.password}';`;
	return db.load(sql);
}

exports.update = user => {
	var sql=`update thanhvien set tenthanhvien='${user.name}', email='${user.email}', ngaysinh='${user.DOB}', gioitinh=${user.gender}, sdt='${user.tel}', diachi='${user.address}' where mathanhvien=${user.id};`;
	return db.save(sql);
}