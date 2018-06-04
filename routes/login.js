var express = require('express');
var router = express.Router();

var productModel = require('../models/bookstore.js');

var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;



loadUser = () => {
    productModel.findAllAccount(function (err, data) {
        if (err) {
            users = [{}];
        }
        else {
            users = data;
        }
    });
}

var users = loadUser();


var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'luanpham';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    let maloai = jwt_payload.MaLoaiTaiKhoan;
    //usually this would be a database call:
    var user = users[_.findIndex(users, { MaTaiKhoan: jwt_payload.MaTaiKhoan })];
    if (user && maloai == 2) {
        next(null, user);
    } else {
        next(null, false);
    }

});
passport.use(strategy);

router.post("/", function (req, res) {
    if (req.body.username && req.body.password) {
        var username = req.body.username;
        var password = req.body.password;
    }

    // usually this would be a database call:
    //users = loadUser();
    loadUser();
    var user = users[_.findIndex(users, { TenDangNhap: username })];

    if (!user) {
        res.status(401).json({ message: "no such user found" });
    }

    if (user.MatKhau === req.body.password) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        var payload = {
            MaTaiKhoan: user.MaTaiKhoan,
            MaLoaiTaiKhoan: user.MaLoaiTaiKhoan,
            TenHienThi: user.TenHienThi
        };
        var token = jwt.sign(payload, jwtOptions.secretOrKey, { expiresIn: '300s' });
        res.json({ message: "ok", token: token });
    } else {
        res.status(401).json({ message: "passwords did not match" });
    }
});

module.exports = router;