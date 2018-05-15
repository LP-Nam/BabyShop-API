var productModel = require('../models/bookstore.js');

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