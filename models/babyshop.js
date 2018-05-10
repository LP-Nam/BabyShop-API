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

// exports.create = function(celebrity, callback){
//     db.executeQuery("INSERT INTO `showbiz`.`celebrities` SET ?", celebrity, callback);
// }

// exports.delete = function(celebId, callback){
//     var strSql = "delete from celebrities where id = ?";
//     db.executeQuery(strSql, celebId, callback);
// }

// exports.update = function(celebrity, id, callback){
//     var strSql = "UPDATE celebrities SET ? WHERE id = ?";
//     db.executeQuery(strSql, [celebrity, id], callback);

//     // db.executeQuery("UPDATE celebrities SET ? WHERE id = ?", [celebrity, id], callback);
// }