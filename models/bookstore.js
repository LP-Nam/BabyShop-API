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
exports.findAllOrderBill = function (dateSearch, callback) {
    var strSql = "SELECT D.MaDonDatHang,D.MaTaiKhoan,D.MaTinhTrang,T.TenTinhTrang,D.NgayLap,D.TongThanhTien,TK.TenHienThi,TK.DiaChi " +
        " from dondathang D,tinhtrang T ,taikhoan TK" +
        " where D.MaTinhTrang = T.MaTinhTrang and TK.MaTaiKhoan = D.MaTaiKhoan";
    if (dateSearch != "") {
        strSql += " and D.NgayLap like '" + dateSearch + "%'"
    }
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListBook = function (bookname, callback) {
    var strSql = "select sp.BiXoa, sp.HinhURL, sp.MaSanPham,sp.TenSanPham,sp.TenTacGia,lsp.TenLoaiSanPham,hsx.TenHangSanXuat,sp.MaLoaiSanPham,sp.MaHangSanXuat,sp.GiaSanPham,sp.SoLuongTon " +
        " from sanpham sp,hangsanxuat hsx,loaisanpham lsp" +
        " where sp.MaHangSanXuat = hsx.MaHangSanXuat " +
        " and sp.MaLoaiSanPham = lsp.MaLoaiSanPham";
    if (bookname != "") {
        strSql += " and sp.TenSanPham like '%" + bookname + "%'";
    }
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.getType = function (callback) {
    var strSql = "select TenLoaiSanPham,MaLoaiSanPham from loaisanpham"
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.getPublisher = function (callback) {
    var strSql = "select TenHangSanXuat,MaHangSanXuat from hangsanxuat"
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListBookType = function (booktypename, callback) {
    var strSql = "select MaLoaiSanPham,TenLoaiSanPham,BiXoa from loaisanpham ";
    if (booktypename != "") {
        strSql += " where TenLoaiSanPham like '%" + booktypename + "%'"
    }
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListPublisher = function (publishername, callback) {
    var strSql = "select MaHangSanXuat,TenHangSanXuat,BiXoa from hangsanxuat ";
    if (publishername != "") {
        strSql += " where TenHangSanXuat like '%" + publishername + "%'"
    }
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.findAllListAccount = function (username, callback) {
    var strSql = "select tk.MaTaiKhoan,tk.TenDangNhap,tk.MatKhau,tk.TenHienThi,tk.DiaChi,tk.DienThoai,tk.Email,ltk.TenLoaiTaiKhoan,tk.MaLoaiTaiKhoan,tk.BiXoa " +
        " from taikhoan tk,loaitaikhoan ltk " +
        " where tk.MaLoaiTaiKhoan = ltk.MaLoaiTaiKhoan";
    if (username != "") {
        strSql += " and tk.TenDangNhap like '%" + username + "%'"
    }
    db.executeQuery(strSql, function (err, data) {
        callback(err, data);
    });
}
exports.searchResult = function (object, callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL" +
        " from sanpham sp,hangsanxuat hsx,loaisanpham LSP" +
        " where  sp.BiXoa = FALSE " +
        " and sp.MaLoaiSanPham = LSP.MaLoaiSanPham " +
        " and hsx.MaHangSanXuat = sp.MaHangSanXuat" +
        ` and sp.GiaSanPham BETWEEN ${object.GiaTu} and ${object.GiaDen}`;
    if (object.TenSanPham != "") {
        strSql += ` and sp.TenSanPham like '%${object.TenSanPham}%'`
    }
    if (object.MaLoaiSanPham != "") {
        strSql += ` and LSP.MaLoaiSanPham = ${object.MaLoaiSanPham}`
    }
    if (object.MaHangSanXuat != "") {
        strSql += ` and hsx.MaHangSanXuat = ${object.MaHangSanXuat}`
    }
    if (object.TenTacGia != "") {
        strSql += ` and sp.TenTacGia like '%${object.TenTacGia}%'`
    }
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
exports.getOrderbillDetail = function (id, callback) {
    var strSql = "SELECT CT.MaSanPham,s.TenSanPham,s.TenTacGia,s.GiaSanPham,CT.SoLuong" +
        " from chitietdondathang CT,sanpham s" +
        " where s.MaSanPham = CT.MaSanPham" +
        " and CT.MaDonDatHang = ?";
    db.executeQuery(strSql, id, function (err, data) {
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
    var strSql = "SELECT lsp.MaLoaiSanPham, sp.GiaSanPham, sp.SoLuongTon, sp.SoLuocXem, sp.MoTa, sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL,hsx.TenHangSanXuat,lsp.TenLoaiSanPham " +
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
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL,hsx.TenHangSanXuat " +
        "from sanpham sp , hangsanxuat hsx " +
        "where sp.MaHangSanXuat=hsx.MaHangSanXuat and sp.BiXoa = FALSE " +
        "and sp.MaHangSanXuat = ?";
    db.executeQuery(strSql, publisherID, callback);
}

exports.findByCategory = function (categoryID, callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL,l.TenLoaiSanPham " +
        "from sanpham sp,loaisanpham l " +
        "where sp.MaLoaiSanPham=l.MaLoaiSanPham and sp.BiXoa = FALSE " +
        "and sp.MaLoaiSanPham = ?";
    db.executeQuery(strSql, categoryID, callback);
}
exports.findByOrderBill = function (orderbillID, callback) {
    var strSql = "SELECT d.MaDonDatHang,d.MaTaiKhoan,d.TongThanhTien,d.MaTinhTrang,t.TenTinhTrang,d.NgayLap,TK.TenHienThi,TK.DiaChi " +
        "from dondathang d,tinhtrang t,taikhoan TK " +
        "where d.MaTinhTrang = t.MaTinhTrang and TK.MaTaiKhoan = d.MaTaiKhoan " +
        " and d.MaDonDatHang = ?";
    db.executeQuery(strSql, orderbillID, callback);
}

exports.findByBook = function (bookID, callback) {
    var strSql = "select TenSanPham,TenTacGia,MaLoaiSanPham,MaHangSanXuat,GiaSanPham,MoTa,SoLuongTon,HinhURL  " +
        "from sanpham  " +
        "where MaSanPham = ?";
    db.executeQuery(strSql, bookID, callback);
}
exports.findByBookType = function (id, callback) {
    var strSql = "select TenLoaiSanPham from loaisanpham where MaLoaiSanPham = ?";
    db.executeQuery(strSql, id, callback);
}

exports.createPublisher = function (factory, callback) {
    var strSql = "INSERT INTO hangsanxuat set ?";
    db.executeQuery(strSql, factory, callback);
}

exports.createCategory = function (category, callback) {
    var strSql = "INSERT INTO loaisanpham set ?";
    db.executeQuery(strSql, category, callback);
}

exports.addBook = function (book, callback) {
    var strSql = "INSERT INTO sanpham(TenSanPham,TenTacGia,MaLoaiSanPham,MaHangSanXuat,GiaSanPham,MoTa,SoLuongTon,HinhURL)" +
        "values(?,?,?,?,?,?,?,?)"
    db.executeQuery(strSql, [book.TenSanPham, book.TenTacGia, book.MaLoaiSanPham, book.MaHangSanXuat, book.GiaSanPham, book.MoTa, book.SoLuongTon, book.HinhURL], callback);
}
exports.addBookType = function (book, callback) {
    var strSql = "INSERT INTO loaisanpham(TenLoaiSanPham)" +
        "values(?)"
    db.executeQuery(strSql, [book.TenLoaiSanPham], callback);
}
exports.addPublisher = function (book, callback) {
    var strSql = "INSERT INTO hangsanxuat(TenHangSanXuat)" +
        "values(?)"
    db.executeQuery(strSql, [book.TenHangSanXuat], callback);
}
exports.upateOrderBill = function (orderBill, callback) {
    var strSql = "update dondathang " +
        "set NgayLap =  '" + orderBill.NgayLap + "'" +
        ", TongThanhTien =  " + orderBill.TongThanhTien +
        ", MaTaiKhoan =  " + orderBill.MaTaiKhoan +
        ", MaTinhTrang =  " + orderBill.MaTinhTrang +
        " where MaDonDatHang = " + orderBill.MaDonDatHang
    db.executeQuery(strSql, callback);
}
exports.history = function (userid, callback) {
    var strSql = "SELECT D.MaDonDatHang,D.MaTaiKhoan,D.MaTinhTrang,T.TenTinhTrang,D.NgayLap,D.TongThanhTien,TK.TenHienThi,TK.DiaChi " +
    " from dondathang D,tinhtrang T ,taikhoan TK" +
    " where D.MaTinhTrang = T.MaTinhTrang and TK.MaTaiKhoan = D.MaTaiKhoan and TK.MaTaiKhoan = "+userid;
    db.executeQuery(strSql,callback);
}
exports.updateAccountAdmin = function (account, callback) {
    var strSql =
        " update taikhoan " +
        " set TenHienThi = '" + account.TenHienThi + "'" +
        ", DiaChi = '" + account.DiaChi + "'" +
        " where MaTaiKhoan = " + account.MaTaiKhoan
    db.executeQuery(strSql, callback);
}
exports.changePassword = function (account, callback) {
    var strSql =
        " update taikhoan " +
        " set  MatKhau = '" + account.MatKhau + "'" +
        " where MaTaiKhoan = " + account.MaTaiKhoan
    db.executeQuery(strSql, callback);
}


exports.updateBook = function (book, callback) {
    var strSql = "update sanpham " +
        "set TenSanPham =  '" + book.TenSanPham + "'" +
        ", TenTacGia =  '" + book.TenTacGia + "'" +
        ", MaLoaiSanPham =  " + book.MaLoaiSanPham +
        ", MaHangSanXuat =  " + book.MaHangSanXuat +
        ", GiaSanPham = " + book.GiaSanPham +
        ", MoTa = '" + book.MoTa + "'" +
        ", SoLuongTon = " + book.SoLuongTon +
        ", HinhURL = '" + book.HinhURL + "'" +
        " where MaSanPham = " + book.MaSanPham;
    db.executeQuery(strSql, callback);
}
exports.updateBookType = function (book, callback) {
    var strSql = "update loaisanpham set TenLoaiSanPham = ? where MaLoaiSanPham = ?"
    db.executeQuery(strSql, [book.TenLoaiSanPham, book.MaLoaiSanPham], callback);
}
exports.updatePublisher = function (book, callback) {
    var strSql = "update hangsanXuat set TenHangSanXuat = ? where MaHangSanXuat = ?"
    db.executeQuery(strSql, [book.TenHangSanXuat, book.MaHangSanXuat], callback);
}
exports.updateAccount = function (account, callback) {
    var strSql = "update taikhoan " +
        " set TenHienThi = ?," +
        " MaLoaiTaiKhoan = ?," +
        " DienThoai = ?," +
        " DiaChi = ?," +
        " Email = ?" +
        " where MaTaiKhoan = ?"
    db.executeQuery(strSql, [account.TenHienThi, account.MaLoaiTaiKhoan, account.DienThoai, account.DiaChi, account.Email, account.MaTaiKhoan], callback);
}
exports.updateInfor = function (account, callback) {
    var strSql = "update taikhoan " +
        " set TenHienThi = ?," +
        " DienThoai = ?," +
        " DiaChi = ?," +
        " Email = ?" +
        " where MaTaiKhoan = ?"
    db.executeQuery(strSql, [account.TenHienThi, account.DienThoai, account.DiaChi, account.Email, account.MaTaiKhoan], callback);
}
exports.findByBookType = function (id, callback) {
    var strSql = "select TenLoaiSanPham from loaisanpham where MaLoaiSanPham = ?";
    db.executeQuery(strSql, id, callback);
}
exports.findByPublisherAdmin = function (id, callback) {
    var strSql = "select TenHangSanXuat from hangsanxuat where MaHangSanXuat = ?";
    db.executeQuery(strSql, id, callback);
}
exports.findByAccount = function (id, callback) {
    var strSql = "select tk.MaTaiKhoan,tk.TenDangNhap,tk.MatKhau,tk.TenHienThi,tk.DiaChi,tk.DienThoai,tk.Email,ltk.TenLoaiTaiKhoan,tk.MaLoaiTaiKhoan,tk.BiXoa" +
        " from taikhoan tk,loaitaikhoan ltk" +
        " where tk.MaLoaiTaiKhoan = ltk.MaLoaiTaiKhoan" +
        " and tk.MaTaiKhoan = ?";
    db.executeQuery(strSql, id, callback);
}
exports.getAccountType = function (callback) {
    var strSql = "select MaLoaiTaiKhoan,TenLoaiTaiKhoan from loaitaikhoan";
    db.executeQuery(strSql, callback);
}
exports.createProduct = function (product, callback) {
    var strSql = "INSERT INTO sanpham set ?";
    db.executeQuery(strSql, product, callback);
}
exports.deleteBook = function (book, callback) {
    var strSql = "update sanpham set BiXoa = ? where MaSanPham = ?";
    db.executeQuery(strSql, [book.BiXoa, book.MaSanPham], callback);
}

exports.deleteBookType = function (book, callback) {
    var strSql = "update loaisanpham set BiXoa = ? where MaLoaiSanPham = ?";
    db.executeQuery(strSql, [book.BiXoa, book.MaLoaiSanPham], callback);
}
exports.deletePublisher = function (book, callback) {
    var strSql = "update hangsanxuat set BiXoa = ? where MaHangSanXuat = ?";
    db.executeQuery(strSql, [book.BiXoa, book.MaHangSanXuat], callback);
}
exports.deleteAccount = function (account, callback) {
    var strSql = "update taikhoan set BiXoa = ? where MaTaiKhoan = ?";
    db.executeQuery(strSql, [account.BiXoa, account.MaTaiKhoan], callback);
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

exports.countBook = function (callback) {
    var strSql = "select count(*) as SoLuong from sanpham where BiXoa=0";
    db.executeQuery(strSql, callback);
}

exports.countBookbyPublisher = function (publisherID, callback) {
    var strSql = "SELECT count(*) as SoLuong " +
        "from sanpham sp " +
        "where  sp.BiXoa = FALSE " +
        "and sp.MaHangSanXuat = ?";
    db.executeQuery(strSql, publisherID, callback);
}

exports.countComment = function (bookID, callback) {
    var strSql = "select count(*) as SoLuong from binhluan where MaSanPham=?";
    db.executeQuery(strSql, bookID, callback);
}

exports.addOrder = function (dondathang, callback) {
    var strSql = "insert into dondathang(NgayLap,TongThanhTien,MaTaiKhoan) " +
        "values(?,?,?)";
    db.executeQuery(strSql, [dondathang.NgayLap, dondathang.TongTien, dondathang.MaTaiKhoan], callback);
}

exports.recentIDorder = function (callback) {
    var strSql = "select MaDonDatHang from dondathang ORDER BY MaDonDatHang desc LIMIT 0,1";
    db.executeQuery(strSql, callback);
}

exports.addOrderDetail = function (chitiet, callback) {
    var strSql = "insert into chitietdondathang(SoLuong,GiaBan,MaDonDatHang,MaSanPham) " +
        "values(?,?,?,?)";
    db.executeQuery(strSql, [chitiet.SoLuong, chitiet.GiaBan, chitiet.MaDonDatHang, chitiet.MaSanPham], callback);
}

exports.updateInventory = function (sp, callback) {
    let sl = parseInt(sp.SoLuong);
    var strSql = "update sanpham set SoLuongTon = SoLuongTon - ? where MaSanPham = ?";
    db.executeQuery(strSql, [sl, sp.MaSanPham], callback);
}

exports.ListComment = function (idbook, callback) {
    var strSql = "select * from binhluan where MaSanPham=?"
    db.executeQuery(strSql, idbook, callback);
}

exports.addComment = function (cmt, callback) {
    var strSql = "insert into binhluan(TenHienThi,NoiDung,ThoiGian,MaSanPham) value(?,?,?,?)";
    db.executeQuery(strSql, [cmt.TenHienThi, cmt.NoiDung, cmt.ThoiGian, cmt.MaSanPham], callback);
}

exports.updateView = function (idbook, callback) {
    var strSql = "update sanpham set SoLuocXem=SoLuocXem+1 where MaSanPham=?";
    db.executeQuery(strSql, idbook, callback);
}

exports.updateQuantitySold = function (sp, callback) {
    let sl = parseInt(sp.SoLuongBan);
    var strSql = "update sanpham set SoLuongBan = SoLuongBan + ? where MaSanPham = ?";
    db.executeQuery(strSql, [sl, sp.MaSanPham], callback);
}

exports.getTop10 = function (callback) {
    var strSql = "select sp.BiXoa, sp.HinhURL, sp.MaSanPham,sp.TenSanPham,"+
    "sp.TenTacGia,lsp.TenLoaiSanPham,hsx.TenHangSanXuat,"+
    "sp.MaLoaiSanPham,sp.MaHangSanXuat,sp.GiaSanPham,sp.SoLuongTon,sp.SoLuongBan,sp.SoLuocXem "+
    "from sanpham sp,hangsanxuat hsx,loaisanpham lsp "+
    "where sp.MaHangSanXuat = hsx.MaHangSanXuat and sp.BiXoa=0 "+
    "and sp.MaLoaiSanPham = lsp.MaLoaiSanPham "+
    "order by SoLuongBan desc "+
    "limit 0,10";
    db.executeQuery(strSql, callback);
}

/////// KHU VUC TEST
exports.findByPublisherPaging = function (publisherID, startPage, callback) {
    var strSql = "SELECT sp.MaSanPham,sp.TenSanPham,sp.GiaSanPham,sp.TenTacGia,sp.HinhURL " +
        "from sanpham sp " +
        "where  sp.BiXoa = FALSE " +
        "and sp.MaHangSanXuat = ? " +
        "LIMIT ?, 12";
    db.executeQuery(strSql, [publisherID, startPage], callback);
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