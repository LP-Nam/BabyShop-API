var express = require('express');
var router = express.Router();

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

// lay san pham theo ma nha xuat ban
router.get('/product/publisher/:publisherID', bookstore.findByPublisher);

// lay san pham theo ma loai san pham
router.get('/product/category/:categoryID', bookstore.findByCategory);

//get all order bill in admin
router.get('/admin/ListOrderBill', bookstore.findAllOrderBill);
//get all list book in admin
router.get('/admin/ListBook', bookstore.findAllListBook);
//get all list book type in admin
router.get('/admin/ListBookType', bookstore.findAllListBookType);
//get all list publisher in admin
router.get('/admin/ListPublisher', bookstore.findAllListPublisher);
//get all list account in admin
router.get('/admin/ListAccount', bookstore.findAllListAccount);
// // Update a celebrities with celebrityId
// router.put('/celebrities/:celebrityId', bookstore.update);

// // Delete a celebrities with celebrityId
// router.delete('/celebrities/:celebrityId', bookstore.delete);

module.exports = router;