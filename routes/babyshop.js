var express = require('express');
var router = express.Router();

var babyshop = require('../controllers/babyshop');

// // Create a new Note
// router.post('/celebrities', babyshop.create);

// create hang san xuat
router.post('/product/factory', babyshop.createFactory);

//create loai san pham
router.post('/product/category', babyshop.createCategory);

// // Retrieve all celebrities
// router.get('/celebrities', babyshop.findAll);

// Retrieve all new product
router.get('/product/new', babyshop.findAllNew);

// Retrieve all best seller product
router.get('/product/best-seller', babyshop.findAllBestSeller);

// Retrieve a single product with id
router.get('/product/:productID', babyshop.findOne);

// lay san pham theo ma hang san xuat
router.get('/product/factory/:factoryID', babyshop.findByFactory);

// lay san pham theo ma loai san pham
router.get('/product/category/:categoryID', babyshop.findByCategory);

// // Update a celebrities with celebrityId
// router.put('/celebrities/:celebrityId', babyshop.update);

// // Delete a celebrities with celebrityId
// router.delete('/celebrities/:celebrityId', babyshop.delete);

module.exports = router;