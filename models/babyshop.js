var db = require('./managerDB');

exports.findAllNew = function (callback) {
    var strSql = "SELECT SanPham.MaSanPham, SanPham.TenSanPham, SanPham.GiaSanPham, SanPham.HinhURL FROM SanPham ORDER BY SanPham.NgayNhap DESC LIMIT 0, 4"
    db.executeQuery(strSql, function (err, data){
        callback(err, data);
    });
}

exports.findAllBestSeller = function (callback) {
    var strSql = "SELECT SanPham.MaSanPham, SanPham.TenSanPham, SanPham.GiaSanPham, SanPham.HinhURL FROM SanPham WHERE SanPham.BiXoa = FALSE ORDER BY SanPham.SoLuongBan DESC LIMIT 0, 4"
    db.executeQuery(strSql, function (err, data){
        callback(err, data);
    });
}

exports.findOne = function(productID, callback){
    var strSql = "SELECT SanPham.MaSanPham, SanPham.TenSanPham, SanPham.GiaSanPham, SanPham.HinhURL FROM SanPham WHERE SanPham.BiXoa = FALSE AND SanPham.MaSanPham = ?";
    db.executeQuery(strSql, productID, callback);
}

exports.findByFactory = function(factoryID, callback){
    var strSql = "SELECT SanPham.MaSanPham, SanPham.TenSanPham, SanPham.GiaSanPham, SanPham.HinhURL FROM SanPham WHERE SanPham.BiXoa = FALSE AND SanPham.MaHangSanXuat = ?";
    db.executeQuery(strSql, factoryID, callback);
}

exports.findByCategory = function(categoryID, callback){
    var strSql = "SELECT SanPham.MaSanPham, SanPham.TenSanPham, SanPham.GiaSanPham, SanPham.HinhURL FROM SanPham WHERE SanPham.BiXoa = FALSE AND SanPham.MaLoaiSanPham = ?";
    db.executeQuery(strSql, categoryID, callback);
}

exports.createFactory = function(factory, callback){
    var strSql = "INSERT INTO hangsanxuat set ?";
    db.executeQuery(strSql, factory, callback);
}

exports.createCategory = function(category, callback){
    var strSql = "INSERT INTO loaisanpham set ?";
    db.executeQuery(strSql, category, callback);
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