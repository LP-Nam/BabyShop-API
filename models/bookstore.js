var db = require('./managerDB');

exports.findAllNew = function (callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL " +
        "from sanpham sp " +
        "where  sp.BiXoa = FALSE " +
        "ORDER BY NgayNhap desc " +
        "LIMIT 0, 8";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllPublisher = function (callback) {
    var strSql = "SELECT hsx.TenHangSanXuat,hsx.MaHangSanXuat " +
        "from hangsanxuat hsx " +
        "where  hsx.BiXoa = FALSE ";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}

exports.findAllType = function (callback) {
    var strSql = "SELECT lsp.MaLoaiSanPham,lsp.TenLoaiSanPham " +
        "from loaisanpham lsp " +
        "where  lsp.BiXoa = FALSE ";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}

exports.findAllBestSeller = function (callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL " +
        "from sanpham sp " +
        "where  sp.BiXoa = FALSE " +
        "ORDER BY SoLuongBan desc " +
        "LIMIT 0, 8";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}

exports.findOne = function (productID, callback) {
    var strSql = "SELECT lsp.MaLoaiSanPham, sp.GiaSanPham, sp.SoLuongTon, sp.MoTa, sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL,hsx.TenHangSanXuat,lsp.TenLoaiSanPham " +
        "from sanpham sp,hangsanxuat hsx,loaisanpham lsp " +
        "where sp.MaLoaiSanPham = lsp.MaLoaiSanPham " +
        "and sp.MaHangSanXuat = hsx.MaHangSanXuat " +
        "and sp.MaSanPham = ?";
    db.executeQuery(strSql, productID, callback);
}

exports.findByPublisher = function (publisherID, callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL " +
        "from sanpham sp " +
        "where  sp.BiXoa = FALSE " +
        "and sp.MaHangSanXuat = ?";
    db.executeQuery(strSql, publisherID, callback);
}

exports.findByCategory = function (categoryID, callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL " +
        "from sanpham sp " +
        "where sp.BiXoa = FALSE " +
        "and sp.MaLoaiSanPham = ?";
    db.executeQuery(strSql, categoryID, callback);
}

exports.createPublisher = function (factory, callback) {
    var strSql = "INSERT INTO hangsanxuat set ?";
    db.executeQuery(strSql, factory, callback);
}

exports.createCategory = function (category, callback) {
    var strSql = "INSERT INTO loaisanpham set ?";
    db.executeQuery(strSql, category, callback);
}

exports.createProduct = function (product, callback) {
    var strSql = "INSERT INTO sanpham set ?";
    db.executeQuery(strSql, product, callback);
}

exports.findRelated = function (idBook, maLoai, callback) {
    var sql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL " +
        "from sanpham sp " +
        "where sp.BiXoa = FALSE " +
        "and sp.MaSanPham <> ? " +
        "and sp.MaLoaiSanPham = ? " +
        "order by rand() " +
        "LIMIT 0, 4";

    db.executeQuery(sql, [idBook, maLoai], callback);
}

exports.findAllAccount = function (callback) {
    var sql = "select tk.MaTaiKhoan, tk.TenDangNhap, tk.MatKhau, tk.TenHienThi, tk.MaLoaiTaiKhoan " +
        "from taikhoan tk " +
        "where tk.BiXoa=false";

    db.executeQuery(sql, callback);
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