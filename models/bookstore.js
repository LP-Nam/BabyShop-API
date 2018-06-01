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
exports.findAllOrderBill = function (callback) {
    var strSql = "SELECT D.MaDonDatHang,D.MaTaiKhoan,D.MaTinhTrang,T.TenTinhTrang,D.NgayLap,D.TongThanhTien " +
        " from dondathang D,tinhtrang T " +
        " where D.MaTinhTrang = T.MaTinhTrang";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListBook = function (callback) {
    var strSql = "select sp.BiXoa, sp.HinhURL, sp.MaSanPham,sp.TenSanPham,sp.TenTacGia,lsp.TenLoaiSanPham,hsx.TenHangSanXuat,sp.MaLoaiSanPham,sp.MaHangSanXuat,sp.GiaSanPham,sp.SoLuongTon " +
        " from sanpham sp,hangsanxuat hsx,loaisanpham lsp" +
        " where sp.MaHangSanXuat = hsx.MaHangSanXuat " +
        " and sp.MaLoaiSanPham = lsp.MaLoaiSanPham";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListBookType = function (callback) {
    var strSql = "select MaLoaiSanPham,TenLoaiSanPham,BiXoa from loaisanpham ";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListPublisher = function (callback) {
    var strSql = "select MaHangSanXuat,TenHangSanXuat,BiXoa from hangsanxuat ";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListAccount = function (callback) {
    var strSql = "select tk.MaTaiKhoan,tk.TenDangNhap,tk.MatKhau,tk.TenHienThi,tk.DiaChi,tk.DienThoai,tk.Email,ltk.TenLoaiTaiKhoan,tk.MaLoaiTaiKhoan,tk.BiXoa " +
        " from taikhoan tk,loaitaikhoan ltk " +
        " where tk.MaLoaiTaiKhoan = ltk.MaLoaiTaiKhoan";
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.getStatus = function (callback) {
    var strSql = "select MaTinhTrang,TenTinhTrang from tinhtrang";
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

//kiem tra tai khoan ton tai //return 1 neu ton tai
exports.checkUsername = function (un, callback) {
    var strSql = "select count(*) as sl from taikhoan where TenDangNhap=?";
    db.executeQuery(strSql, un, callback);
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
exports.findByOrderBill = function (orderbillID, callback) {
    var strSql = "SELECT d.MaDonDatHang,d.MaTaiKhoan,d.TongThanhTien,d.MaTinhTrang,t.TenTinhTrang,d.NgayLap " +
        "from dondathang d,tinhtrang t " +
        "where d.MaTinhTrang = t.MaTinhTrang " +
        " and d.MaDonDatHang = ?";
    db.executeQuery(strSql, orderbillID, callback);
}

exports.createPublisher = function (factory, callback) {
    var strSql = "INSERT INTO hangsanxuat set ?";
    db.executeQuery(strSql, factory, callback);
}

exports.createCategory = function (category, callback) {
    var strSql = "INSERT INTO loaisanpham set ?";
    db.executeQuery(strSql, category, callback);
}
exports.upateOrderBill = function (orderBill, callback) {
    var strSql = "update dondathang " +
        "set NgayLap =  '" + orderBill.NgayLap + "'" +
        ", TongThanhTien =  " + orderBill.TongThanhTien +
        ", MaTaiKhoan =  " + orderBill.MaTaiKhoan +
        ", MaTinhTrang =  " + orderBill.MaTinhTrang +
        " where MaDonDatHang = " + orderBill.MaDonDatHang;
    db.executeQuery(strSql, callback);
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

exports.register = function (account, callback) {
    var strSql = "INSERT INTO taikhoan(TenDangNhap,MatKhau,TenHienThi,DiaChi,DienThoai,Email,BiXoa,MaLoaiTaiKhoan) " +
        "values (?,?,?,?,?,?,0,1)";
    db.executeQuery(strSql, [account.TenDangNhap, account.MatKhau, account.TenHienThi, account.DiaChi, account.DienThoai, account.Email], callback);
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