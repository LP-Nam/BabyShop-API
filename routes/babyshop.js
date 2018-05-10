var express = require('express');
var router = express.Router();

var babyshop = require('../controllers/babyshop');

// // Create a new Note
// router.post('/celebrities', babyshop.create);

// // Retrieve all celebrities
// router.get('/celebrities', babyshop.findAll);

// Retrieve all new product
router.get('/new', babyshop.findAllNew);

// Retrieve all best seller product
router.get('/best-seller', babyshop.findAllBestSeller);

// // Retrieve a single celebrities with noteId
// router.get('/celebrities/:celebrityId', babyshop.findOne);

// // Update a celebrities with celebrityId
// router.put('/celebrities/:celebrityId', babyshop.update);

// // Delete a celebrities with celebrityId
// router.delete('/celebrities/:celebrityId', babyshop.delete);

module.exports = router;