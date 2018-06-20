var express = require('express');
var router = express.Router();

var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var bookstore = require('../controllers/bookstore');

// // Create a new Note
// router.post('/celebrities', bookstore.create);

// create nha xuat ban
router.post('/product/publisher', bookstore.createPublisher);

//create loai san pham
router.post('/product/category', bookstore.createCategory);

//create san pham
router.post('/product', bookstore.createProduct);

// // Retrieve all celebrities
// router.get('/celebrities', bookstore.findAll);

// Retrieve all new product
router.get('/product/new', bookstore.findAllNew);

//Retrieve all publisher
router.get('/product/publisher', bookstore.findAllPublisher);

//Retrieve all type
router.get('/product/type', bookstore.findAllType);

// Retrieve all best seller product
router.get('/product/best-seller', bookstore.findAllBestSeller);

// Retrieve a single product with id
router.get('/product/:productID', bookstore.findOne);

// kiem tra tai khoan ton tai
router.get('/checkUsername/:username', bookstore.checkUsername);

// lay san pham theo ma nha xuat ban
router.get('/product/publisher/:publisherID', bookstore.findByPublisher);

// lấy số lượng sách theo nhà xuất bản
router.get('/product/publisher/countAllBook/:publisherID', bookstore.countBookbyPublisher);

// lay san pham theo ma loai san pham
router.get('/product/category/:categoryID', bookstore.findByCategory);

// lay so luong sach chua bi xoa
router.get('/countProduct', bookstore.countBook);

//get list
router.get('/admin/ListOrderBill', passport.authenticate('jwt', { session: false }), bookstore.findAllOrderBill);

router.get('/admin/ListBook', passport.authenticate('jwt', { session: false }), bookstore.findAllListBook);

router.get('/admin/ListBookType', passport.authenticate('jwt', { session: false }), bookstore.findAllListBookType);

router.get('/admin/ListPublisher', passport.authenticate('jwt', { session: false }), bookstore.findAllListPublisher);

router.get('/admin/getOrderbillDetail/:id', bookstore.getOrderbillDetail);
//upate orbill
router.get('/admin/UpdateOrderBill/getStatus', bookstore.getStatus);

router.get('/admin/UpdateOrderBill/:OrderBillID', bookstore.findByOrderBill);

router.post('/admin/UpdateOrderBill/:OrderBillID', bookstore.updateOrderBill);

router.get("/history/:userid",bookstore.history);

router.post('/admin/UpdateAccountAdmin', bookstore.updateAccountAdmin);

router.get('/admin/ListAccount', passport.authenticate('jwt', { session: false }), bookstore.findAllListAccount);

//doi mat khau
router.post('/changePassword', bookstore.changePassword)

//cap nhat thogn tin
router.put('/UpdateInfor/:id', bookstore.updateInfor);

router.get('/searchResult', bookstore.searchResult)
// tim cac sach cung the loai
router.post('/product/related', bookstore.findRelated);

//update account 
router.delete('/admin/UpdateAccount/:id', bookstore.deleteAccount);
router.get('/admin/findByAccount/:id', bookstore.findByAccount);
router.get('/admin/getAccountType', bookstore.getAccountType);
router.post('/admin/UpdateAccount/:id', bookstore.updateAccount);
//update publisher
router.get('/admin/findByPublisherAdmin/:id', bookstore.findByPublisherAdmin);
router.delete('/admin/UpdatePublisher/:id', bookstore.deletePublisher);
router.put('/admin/UpdatePublisher/:id', bookstore.updatePublisher);
router.post('/admin/addPublisher', bookstore.addPublisher)

//update book type
router.delete('/admin/UpdateBookType/:id', bookstore.deleteBookType);
router.get('/admin/findByBookType/:id', bookstore.findByBookType);
router.put('/admin/UpdateBookType/:id', bookstore.updateBookType);
router.post('/admin/addBookType', bookstore.addBookType)

// them tai khoan moi
router.post('/register', bookstore.register);

//update book
router.get('/admin/getType', bookstore.getType);

router.post('/admin/uploadImage', bookstore.uploadImage)
//quản lý các sản phẩm
router.get('/admin/getType', bookstore.getType);

router.post('/admin/upadateBook/uploadImage', bookstore.uploadImage);

router.get('/admin/getPublisher', bookstore.getPublisher);

router.put('/admin/UpdateBook/:id', bookstore.updateBook);

router.delete('/admin/UpdateBook/:id', bookstore.deleteBook);

router.get('/admin/findByBook/:bookID', bookstore.findByBook);

//
router.post('/admin/addBook', bookstore.addBook)
//lay so luong cmt thuoc sach do
router.get('/comment/product/:idProduct', bookstore.countComment);
// router.get('/comment/product/:idProduct',bookstore.countComment);

//thêm đơn đặt hàng
router.post('/order/add', bookstore.addOrder);

//* GET ***/api/order/recentID*** lấy mã đơn đặt hàng vừa tạo
router.get('/order/recentID', bookstore.recentIDorder);

//* POST ***/api/orderDetail/add*** thêm chi tiết đơn đặt hàng
router.post('/orderDetail/add', bookstore.addOrderDetail);

//* POST ***/api/product/updateInventory*** cập nhật số lượng tồn sản phẩm
router.post('/product/updateInventory', bookstore.updateInventory);

//* GET ***/api/ListComment/:idProduct*** lấy các comment thuộc sách đó
router.get('/comment/getList/:idProduct', bookstore.ListComment);

//* POST ***/api/comment/*** thêm 1 comment
router.post('/comment', bookstore.addComment);

//* GET ***/api/product/viewUpdate/:idProduct*** cập nhật số lượt xem của sản phẩm
router.get('/product/viewUpdate/:idProduct', bookstore.updateView);

//* POST ***/api/product/updateQuantitySold*** cập nhật số lượng đã bán của sản phẩm
router.post('/product/updateQuantitySold', bookstore.updateQuantitySold);

//* GET ***/api/product/top10*** lấy top 10 sản phẩm bán chạy
router.get('/admin/product/top10', passport.authenticate('jwt', { session: false }), bookstore.getTop10);


//// KHU VUC TEST
// lay san pham theo ma nha xuat ban
router.post('/product/publisherTestPaging', bookstore.findByPublisherPaging);


// // Update a celebrities with celebrityId
// router.put('/celebrities/:celebrityId', bookstore.update);

// // Delete a celebrities with celebrityId
// router.delete('/celebrities/:celebrityId', bookstore.delete);

module.exports = router;