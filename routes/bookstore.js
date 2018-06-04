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

// lay san pham theo ma loai san pham
router.get('/product/category/:categoryID', bookstore.findByCategory);

// lay so luong sach chua bi xoa
router.get('/countProduct', bookstore.countBook);

//get all order bill in admin
router.get('/admin/ListOrderBill', passport.authenticate('jwt', { session: false }), bookstore.findAllOrderBill);
//get all list book in admin
router.get('/admin/ListBook', passport.authenticate('jwt', { session: false }), bookstore.findAllListBook);
//get all list book type in admin
router.get('/admin/ListBookType', passport.authenticate('jwt', { session: false }), bookstore.findAllListBookType);
//get all list publisher in admin
router.get('/admin/ListPublisher', passport.authenticate('jwt', { session: false }), bookstore.findAllListPublisher);

router.get('/admin/UpdateOrderBill/getStatus', bookstore.getStatus);

router.get('/admin/UpdateOrderBill/:OrderBillID', bookstore.findByOrderBill);

router.post('/admin/UpdateOrderBill/:OrderBillID', bookstore.updateOrderBill);


router.get('/admin/ListAccount', passport.authenticate('jwt', { session: false }), bookstore.findAllListAccount);
// tim cac sach cung the loai
router.post('/product/related', bookstore.findRelated);

// them tai khoan moi
router.post('/register', bookstore.register);



// // Update a celebrities with celebrityId
// router.put('/celebrities/:celebrityId', bookstore.update);

// // Delete a celebrities with celebrityId
// router.delete('/celebrities/:celebrityId', bookstore.delete);

module.exports = router;