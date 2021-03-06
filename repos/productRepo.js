var db = require('../fn/dbAccess');

module.exports.searchBysearchByName = (name) => {
    var sql = `select * from sanpham where ten like "%${name}%"`;
    return db.load(sql);
}
module.exports.searchBysearchByCategory = (category) => {
    var sql = `select sanpham.* from sanpham join loaisanpham on sanpham.maloai = loaisanpham.maloai where loaisanpham.tenloai like "%${category}%"`;
    return db.load(sql);
}
module.exports.searchBysearchByBrand = (brand) => {
    var sql = `select sanpham.* from sanpham join thuonghieu on sanpham.mathuonghieu = thuonghieu.mathuonghieu where thuonghieu.tenthuonghieu like "%${brand}%"`;
    return db.load(sql);
}

module.exports.loadAll = () => {
    var sql = `select * from sanpham`;
    return db.load(sql);
}

module.exports.loadById = (id) => {
    var sql = `select * from sanpham p, thuonghieu b, loaisanpham c where masanpham = ` + id + ` and p.mathuonghieu=b.mathuonghieu and p.maloai=c.maloai`;
    return db.load(sql);
}

module.exports.loadByBrand = (brandId, row = null) => {
    if (row != undefined && row != null) {
        var sql = `select * from sanpham where mathuonghieu = ` + brandId + ` limit ` + row;
        return db.load(sql);
    }
    var sql = `select * from sanpham where mathuonghieu = ` + brandId;
    return db.load(sql);
}

module.exports.loadByCategory = (categoryId, row = null) => {
    if (row != undefined && row != null) {
        var sql = `select * from sanpham where maloai = ` + categoryId + ` limit ` + row;
        return db.load(sql);
    }
    var sql = `select * from sanpham where maloai = ` + categoryId;
    return db.load(sql);
}

module.exports.loadByCategoryBrand = (categoryId, brandId) => {
    var sql = `select * from sanpham where (maloai = ` + categoryId + ` and mathuonghieu = ` + brandId + `)`;
    return db.load(sql);
}

module.exports.loadByView = () => {
    var sql = `select * from sanpham order by luotxem desc limit 10 `
    return db.load(sql);
}

module.exports.loadBySell = () => {
    var sql = `select * from sanpham order by luotmua desc limit 10`
    return db.load(sql);
}

module.exports.loadByPopular = () => {
    var sql = `select * from sanpham order by luotmua desc, luotxem desc limit 16`
    return db.load(sql);
}

module.exports.loadByNew = () => {
    var sql = `select * from sanpham order by ngaynhap desc, luotxem desc limit 10`
    return db.load(sql);
}

module.exports.add = (prod) => {
	var sql = `insert into sanpham (maloai, mathuonghieu, ten, xuatxu, gia, chatlieu, kichthuoc, trongluong, soluong, ngaynhap)  
	values(${prod.catID}, ${prod.supID}, '${prod.Name}', '${prod.Org}', ${prod.Price}, '${prod.Material}', '${prod.Size}', ${prod.Weight}, ${prod.Quant}, CURDATE())`;
	return db.save(sql);
}

module.exports.delete = (id) => {
	var sql = `delete from sanpham where masanpham=${id}`;
	return db.save(sql);
}

module.exports.update = (prod) => {
	var sql = `update sanpham set maloai=${prod.catID}, mathuonghieu=${prod.supID}, ten='${prod.Name}', xuatxu='${prod.Org}',
	gia=${prod.Price}, chatlieu='${prod.Material}', kichthuoc='${prod.Size}', trongluong=${prod.Weight}, soluong=${prod.Quant} where masanpham=${prod.proID}`;
	return db.save(sql);
}


module.exports.updateQua = (pro) => {
    var sql = `update sanpham set luotmua=${pro.QuatBuy}, soluongcon=${pro.Remain} where masanpham=${pro.proID}`;
    return db.save(sql);
}

module.exports.updateView = (pro) => {
    var sql = `update sanpham set luotxem=${pro.view} where masanpham=${pro.proID}`;
    return db.save(sql);
}


module.exports.single = (id) => {
    return new Promise((resolve, reject) => {
        var sql = `select * from sanpham where masanpham=${id}`;
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


