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

router.get("/", passport.authenticate('jwt', { session: false }), function (req, res) {
    res.json("success");
});

module.exports = router;