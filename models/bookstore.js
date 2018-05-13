var db = require('./managerDB');

exports.findAllNew = function (callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL "+
    "from sanpham sp "+
    "where  sp.BiXoa = FALSE "+
    "ORDER BY NgayNhap desc "+
    "LIMIT 0, 8";
    db.executeQuery(strSql, function (err, data){
        callback(err, data);
    });
}

exports.findAllBestSeller = function (callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL "+
    "from sanpham sp "+
    "where  sp.BiXoa = FALSE "+
    "ORDER BY SoLuongBan desc "+
    "LIMIT 0, 8";
    db.executeQuery(strSql, function (err, data){
        callback(err, data);
    });
}

exports.findOne = function(productID, callback){
    var strSql = "SELECT `sanpham`.`MaSanPham`,"+
    "`sanpham`.`TenSanPham`,"+
    "`sanpham`.`TenTacGia`,"+
    "`sanpham`.`HinhURL`,"+
    "`sanpham`.`GiaSanPham`,"+
    "`sanpham`.`NgayNhap`,"+
    "`sanpham`.`SoLuongTon`,"+
    "`sanpham`.`SoLuongBan`,"+
    "`sanpham`.`SoLuocXem`,"+
    "`sanpham`.`MoTa`,"+
    "`sanpham`.`BiXoa`,"+
    "`sanpham`.`MaLoaiSanPham`,"+
    "`sanpham`.`MaHangSanXuat` "+
    "FROM `bansach`.`sanpham` WHERE `sanpham`.`MaSanPham` = ?";
    db.executeQuery(strSql, productID, callback);
}

exports.findByPublisher = function(publisherID, callback){
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL "+
    "from sanpham sp "+
    "where  sp.BiXoa = FALSE "+
    "and sp.MaHangSanXuat = ?";
    db.executeQuery(strSql, publisherID, callback);
}

exports.findByCategory = function(categoryID, callback){
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL "+
    "from sanpham sp "+
    "where sp.BiXoa = FALSE "+
    "and sp.MaLoaiSanPham = ?";
    db.executeQuery(strSql, categoryID, callback);
}

exports.createPublisher = function(factory, callback){
    var strSql = "INSERT INTO hangsanxuat set ?";
    db.executeQuery(strSql, factory, callback);
}

exports.createCategory = function(category, callback){
    var strSql = "INSERT INTO loaisanpham set ?";
    db.executeQuery(strSql, category, callback);
}

exports.createProduct = function(product, callback){
    var strSql = "INSERT INTO sanpham set ?";
    db.executeQuery(strSql, product, callback);
}

// exports.delete = function(celebId, callback){
//     var strSql = "delete from celebrities where id = ?";
//     db.executeQuery(strSql, celebId, callback);
// }

// exports.update = function(celebrity, id, callback){
//     var strSql = "UPDATE celebrities SET ? WHERE id = ?";
//     db.executeQuery(strSql, [celebrity, id], callback);

//     // db.executeQuery("UPDATE celebrities SET ? WHERE id = ?", [celebrity, id], callback);
// }