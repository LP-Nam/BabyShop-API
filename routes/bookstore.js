var express = require('express');
var router = express.Router();

var bookstore = require('../controllers/bookstore');

// // Create a new Note
// router.post('/celebrities', bookstore.create);

// create hang san xuat
router.post('/product/factory', bookstore.createFactory);

//create loai san pham
router.post('/product/category', bookstore.createCategory);

//create san pham
router.post('/product', bookstore.createProduct);

// // Retrieve all celebrities
// router.get('/celebrities', bookstore.findAll);

// Retrieve all new product
router.get('/product/new', bookstore.findAllNew);

// Retrieve all best seller product
router.get('/product/best-seller', bookstore.findAllBestSeller);

// Retrieve a single product with id
router.get('/product/:productID', bookstore.findOne);

// lay san pham theo ma hang san xuat
router.get('/product/factory/:factoryID', bookstore.findByFactory);

// lay san pham theo ma loai san pham
router.get('/product/category/:categoryID', bookstore.findByCategory);

// // Update a celebrities with celebrityId
// router.put('/celebrities/:celebrityId', bookstore.update);

// // Delete a celebrities with celebrityId
// router.delete('/celebrities/:celebrityId', bookstore.delete);

module.exports = router;