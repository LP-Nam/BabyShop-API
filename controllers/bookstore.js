var productModel = require('../models/bookstore.js');
var path = require('path');
var fs = require('fs');
exports.createPublisher = function(req, res) {
    productModel.createPublisher(req.body, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send();
    });
};

exports.createCategory = function(req, res) {
    productModel.createCategory(req.body, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send();
    });
};

exports.createProduct = function(req, res) {
    productModel.createProduct(req.body, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send();
    });
};

// them 1 tai khoan
exports.register = function(req, res) {
    productModel.register(req.body, function (err,data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send(data);
    });
};


exports.findAllNew = function(req, res) {
    // Retrieve and return all notes from the database.
    productModel.findAllNew(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findAllBestSeller = function(req, res) {
    // Retrieve and return all notes from the database.
    productModel.findAllBestSeller(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    var id = req.params.productID;
    productModel.findOne(id, function(err, data){
        if(err){
            res.status(400).send(err);
            return;
        }
        res.status(201).send(data);
    });
};

//kiem tra tai khoan ton tai
exports.checkUsername = function(req, res) {
    var un = req.params.username;
    productModel.checkUsername(un, function(err, data){
        if(err){
            res.status(400).send(err);
            return;
        }
        res.status(201).send(data);
    });
};

exports.findByPublisher = function(req, res) {
    var id = req.params.publisherID;
    productModel.findByPublisher(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findAllPublisher = function(req, res) {
    productModel.findAllPublisher(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findAllOrderBill = function(req, res) {
        var dateSearch = req.query.date
    productModel.findAllOrderBill(dateSearch,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.getType = function(req, res) {
    productModel.getType(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.getPublisher = function(req, res) {
    productModel.getPublisher(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findAllListBook = function(req, res) {
    var bookname = req.query.bookname
    productModel.findAllListBook(bookname,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findAllListBookType = function(req, res) {
    var booktypename = req.query.booktypename
    productModel.findAllListBookType(booktypename,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findAllListPublisher = function(req, res) {
    var publishername = req.query.publishername
    productModel.findAllListPublisher(publishername,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findAllListAccount = function(req, res) {
    var username =req.query.username
    productModel.findAllListAccount(username,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findAllType = function(req, res) {
    productModel.findAllType(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findByCategory = function(req, res) {
    var id = req.params.categoryID;
    productModel.findByCategory(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findByOrderBill = function(req, res) {
    var id = req.params.OrderBillID;
    productModel.findByOrderBill(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findByBook = function(req, res) {
    var id = req.params.bookID;
    productModel.findByBook(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findByBookType = function(req, res) {
    var id = req.params.id;
    productModel.findByBookType(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findByPublisherAdmin = function(req, res) {
    var id = req.params.id;
    productModel.findByPublisherAdmin(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.findByAccount = function(req, res) {
    var id = req.params.id;
    productModel.findByAccount(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.getAccountType = function(req, res) {
    productModel.getAccountType(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.countComment = function(req, res) {
    var id = req.params.idProduct;
    productModel.countComment(id, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.getStatus = function(req, res) {
    productModel.getStatus(function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.updateOrderBill = function(req, res) {
    var orderbill={                                                                                                                                                                                                                                                 
        MaDonDatHang: req.params.OrderBillID,
        NgayLap: req.body.NgayLap,
        MaTaiKhoan: req.body.MaTaiKhoan,
        TongThanhTien: req.body.TongThanhTien,
        MaTinhTrang: req.body.MaTinhTrang
    }
    productModel.upateOrderBill(orderbill,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.updateBook = function(req, res) {
    var book={                                                                                                                                                                                                                                                 
        MaSanPham: req.params.id,
        TenSanPham: req.body.TenSanPham,
        TenTacGia: req.body.TenTacGia,
        MaLoaiSanPham: req.body.MaLoaiSanPham,
        MaHangSanXuat: req.body.MaHangSanXuat,
        GiaSanPham: req.body.GiaSanPham,
        MoTa: req.body.MoTa,
        SoLuongTon: req.body.SoLuongTon,
        HinhURL: req.body.HinhURL
    }
    productModel.updateBook(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.updateBookType = function(req, res) {
    var book={                                                                                                                                                                                                                                                 
        MaLoaiSanPham: req.params.id,
        TenLoaiSanPham: req.body.TenLoaiSanPham
    }
    productModel.updateBookType(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.updatePublisher = function(req, res) {
    var book={                                                                                                                                                                                                                                                 
        MaHangSanXuat: req.params.id,
        TenHangSanXuat: req.body.TenHangSanXuat
    }
    productModel.updatePublisher(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.updateAccount = function(req, res) {
    var account={                                                                                                                                                                                                                                                 
        MaTaiKhoan: req.params.id,
        TenHienThi: req.body.TenHienThi,
        MaLoaiTaiKhoan: req.body.MaLoaiTaiKhoan,
        DienThoai: req.body.DienThoai,
        DiaChi: req.body.DiaChi,
        Email: req.body.Email
    }
    productModel.updateAccount(account,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.updateInfor = function(req, res) {
    var account={                                                                                                                                                                                                                                                 
        MaTaiKhoan: req.params.id,
        TenHienThi: req.body.TenHienThi,
        DienThoai: req.body.DienThoai,
        DiaChi: req.body.DiaChi,
        Email: req.body.Email
    }
    productModel.updateInfor(account,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.addBook = function(req, res) {
    var book={                                                                                                                                                                                                                                                 
        TenSanPham: req.body.TenSanPham,
        TenTacGia: req.body.TenTacGia,
        MaLoaiSanPham: req.body.MaLoaiSanPham,
        MaHangSanXuat: req.body.MaHangSanXuat,
        GiaSanPham: req.body.GiaSanPham,
        MoTa: req.body.MoTa,
        SoLuongTon: req.body.SoLuongTon,
        HinhURL: req.body.HinhURL
    }
    productModel.addBook(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.addBookType = function(req, res) {
    var book={                                                                                                                                                                                                                                                 
        TenLoaiSanPham: req.body.TenLoaiSanPham
    }
    productModel.addBookType(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.addPublisher = function(req, res) {
    var book={                                                                                                                                                                                                                                                 
        TenHangSanXuat: req.body.TenHangSanXuat
    }
    productModel.addPublisher(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.deleteBook = function(req, res) {
    var book={
        MaSanPham: req.params.id,
        BiXoa: req.body.BiXoa
    }
    productModel.deleteBook(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.deleteBookType = function(req, res) {
    var book={
        MaLoaiSanPham: req.params.id,
        BiXoa: req.body.BiXoa
    }
    productModel.deleteBookType(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.deletePublisher = function(req, res) {
    var book={
        MaHangSanXuat: req.params.id,
        BiXoa: req.body.BiXoa
    }
    productModel.deletePublisher(book,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.deleteAccount = function(req, res) {
    var account={
        MaTaiKhoan: req.params.id,
        BiXoa: req.body.BiXoa
    }
    productModel.deleteAccount(account,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.findRelated = function(req, res) {
    var id = req.body.MaSanPham;
    var maloai = req.body.MaLoaiSanPham;

    productModel.findRelated(id, maloai, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send(data);
    });
};

exports.countBook = function(req, res) {
    productModel.countBook(function(err, data){
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.countBookbyPublisher = function(req, res) {
    var id = req.params.publisherID;
    productModel.countBookbyPublisher(id, function(err, data){
        if(err){
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.uploadImage = function(req,res){
  let imageFile = req.files.file
  imageFile.mv(`${__dirname}/${imageFile.name}`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200);
  });
  var oldPath = `${__dirname}/${imageFile.name}`
  var newPath = './public/images/Product/'+imageFile.name
  fs.readFile(oldPath , function(err, data) {
    fs.writeFile(newPath, data, function(err) {
        fs.unlink(oldPath, function(){
            if(err) throw err;
           
        });
    }); 
}); 
}

/////// KHU VUC TEST
exports.findByPublisherPaging = function(req, res) {
    var id = req.body.publisherID;
    var startPage = req.body.startPage;
    productModel.findByPublisherPaging(id, startPage, function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.getOrderbillDetail = function(req, res) {
    var id = req.params.id
    productModel.getOrderbillDetail(id,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.updateAccountAdmin = function(req, res) {
    var account={                                                                                                                                                                                                                                                 
        MaTaiKhoan: req.body.MaTaiKhoan,
        TenHienThi: req.body.TenHienThi,
        DiaChi: req.body.DiaChi,
    }
    productModel.updateAccountAdmin(account,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.changePassword = function(req, res) {
    var account={                                                                                                                                                                                                                                                 
        MaTaiKhoan: req.body.MaTaiKhoan,
        MatKhau: req.body.MatKhau
    }
    productModel.changePassword(account,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};
exports.searchResult = function(req, res) {
    var object = {
         TenSanPham : req.query.TenSach,
         GiaTu : req.query.GiaTu,
         GiaDen : req.query.GiaDen,
         MaLoaiSanPham: req.query.MaLoaiSanPham,
         MaHangSanXuat: req.query.MaHangSanXuat,
         TenTacGia: req.query.TenTacGia      
    }
    productModel.searchResult(object,function(err, data){
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};


// exports.update = function(req, res) {
//     // Update a note identified by the noteId in the request
//     var id = req.params.celebrityId;

//     console.log(req.body);

//     productModel.update(req.body, id, function(err, data){
//         if(err){
//             res.status(400).send(err);
//             return;
//         }
//         res.status(200).send();
//     });
// };

// exports.delete = function(req, res) {
//     // Delete a note with the specified noteId in the request
//     var id = req.params.celebrityId;
//     productModel.delete(id, function(err, data){
//         if(err){
//             res.status(400).send(err);
//             return;
//         }
//         res.status(201).send();
//     });
// };