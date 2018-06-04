var db = require('../fn/dbAccess');

module.exports.loadAll = () => {
    var sql = `select * from sanpham`;
    return db.load(sql);
}

module.exports.loadById = (id) => {
    var sql = `select * from sanpham where masanpham = ` + id;
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
    var sql = `select * from sanpham order by luotxem desc `
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