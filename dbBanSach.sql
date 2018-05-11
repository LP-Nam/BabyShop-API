/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : bansach

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-01-09 10:57:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chitietdondathang
-- ----------------------------
DROP TABLE IF EXISTS `chitietdondathang`;
CREATE TABLE `chitietdondathang` (
  `MaChiTietDonDatHang` int(9) NOT NULL AUTO_INCREMENT,
  `SoLuong` int(11) DEFAULT NULL,
  `GiaBan` int(11) DEFAULT NULL,
  `MaDonDatHang` int(9) NOT NULL,
  `MaSanPham` int(11) NOT NULL,
  PRIMARY KEY (`MaChiTietDonDatHang`),
  KEY `fk_ChiTietDonDatHang_DonDatHang1_idx` (`MaDonDatHang`),
  KEY `fk_ChiTietDonDatHang_SanPham1_idx` (`MaSanPham`),
  CONSTRAINT `fk_ChiTietDonDatHang_SanPham1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`MaSanPham`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_chitiet_dondat` FOREIGN KEY (`MaDonDatHang`) REFERENCES `dondathang` (`MaDonDatHang`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of chitietdondathang
-- ----------------------------
INSERT INTO `chitietdondathang` VALUES ('1', '1', '60000', '1', '63');
INSERT INTO `chitietdondathang` VALUES ('2', '1', '90000', '1', '64');
INSERT INTO `chitietdondathang` VALUES ('3', '1', '150000', '2', '48');
INSERT INTO `chitietdondathang` VALUES ('4', '1', '90000', '3', '64');
INSERT INTO `chitietdondathang` VALUES ('5', '1', '150000', '4', '48');
INSERT INTO `chitietdondathang` VALUES ('6', '1', '80000', '4', '53');

-- ----------------------------
-- Table structure for dondathang
-- ----------------------------
DROP TABLE IF EXISTS `dondathang`;
CREATE TABLE `dondathang` (
  `MaDonDatHang` int(9) NOT NULL AUTO_INCREMENT,
  `NgayLap` datetime DEFAULT NULL,
  `TongThanhTien` int(11) DEFAULT NULL,
  `MaTaiKhoan` int(11) NOT NULL,
  `MaTinhTrang` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`MaDonDatHang`),
  KEY `fk_DonDatHang_TaiKhoan1_idx` (`MaTaiKhoan`),
  KEY `fk_DonDatHang_TinhTrang1_idx` (`MaTinhTrang`),
  CONSTRAINT `fk_DonDatHang_TaiKhoan1` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`MaTaiKhoan`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_DonDatHang_TinhTrang1` FOREIGN KEY (`MaTinhTrang`) REFERENCES `tinhtrang` (`MaTinhTrang`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of dondathang
-- ----------------------------
INSERT INTO `dondathang` VALUES ('1', '2018-01-04 14:33:59', '150000', '5', '1');
INSERT INTO `dondathang` VALUES ('2', '2018-01-06 17:33:24', '150000', '5', '1');
INSERT INTO `dondathang` VALUES ('3', '2018-01-08 14:21:20', '90000', '7', '1');
INSERT INTO `dondathang` VALUES ('4', '2018-01-08 14:21:36', '230000', '7', '1');
INSERT INTO `dondathang` VALUES ('5', '2018-01-08 14:23:05', '50000', '7', '1');

-- ----------------------------
-- Table structure for hangsanxuat
-- ----------------------------
DROP TABLE IF EXISTS `hangsanxuat`;
CREATE TABLE `hangsanxuat` (
  `MaHangSanXuat` int(11) NOT NULL AUTO_INCREMENT,
  `TenHangSanXuat` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `LogoURL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BiXoa` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`MaHangSanXuat`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of hangsanxuat
-- ----------------------------
INSERT INTO `hangsanxuat` VALUES ('1', 'Nhà Xuất Bản Lao Động - Xã Hội', null, '0');
INSERT INTO `hangsanxuat` VALUES ('2', 'Nhà Xuất Bản Thế Giới', null, '0');
INSERT INTO `hangsanxuat` VALUES ('3', 'Nhà Xuất Bản Hội Nhà Văn', null, '0');
INSERT INTO `hangsanxuat` VALUES ('4', 'Nhà Xuất Bản Văn Hóa Văn Nghệ', null, '0');
INSERT INTO `hangsanxuat` VALUES ('5', 'Nhà Xuất Bản Thanh Niên', null, '0');
INSERT INTO `hangsanxuat` VALUES ('6', 'Nhà Xuất Bản Lao Động', null, '0');

-- ----------------------------
-- Table structure for loaisanpham
-- ----------------------------
DROP TABLE IF EXISTS `loaisanpham`;
CREATE TABLE `loaisanpham` (
  `MaLoaiSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiSanPham` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BiXoa` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`MaLoaiSanPham`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of loaisanpham
-- ----------------------------
INSERT INTO `loaisanpham` VALUES ('1', 'Truyện tranh', '0');
INSERT INTO `loaisanpham` VALUES ('2', 'Truyện ngắn', '0');
INSERT INTO `loaisanpham` VALUES ('3', 'Tản văn', '0');
INSERT INTO `loaisanpham` VALUES ('4', 'Tiểu thuyết', '0');
INSERT INTO `loaisanpham` VALUES ('5', 'Khác', '0');
INSERT INTO `loaisanpham` VALUES ('6', 'Thần thoại', '0');

-- ----------------------------
-- Table structure for loaitaikhoan
-- ----------------------------
DROP TABLE IF EXISTS `loaitaikhoan`;
CREATE TABLE `loaitaikhoan` (
  `MaLoaiTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenLoaiTaiKhoan` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaLoaiTaiKhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of loaitaikhoan
-- ----------------------------
INSERT INTO `loaitaikhoan` VALUES ('1', 'User');
INSERT INTO `loaitaikhoan` VALUES ('2', 'Admin');

-- ----------------------------
-- Table structure for sanpham
-- ----------------------------
DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE `sanpham` (
  `MaSanPham` int(11) NOT NULL AUTO_INCREMENT,
  `TenSanPham` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TenTacGia` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `HinhURL` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `GiaSanPham` int(11) DEFAULT NULL,
  `NgayNhap` datetime DEFAULT NULL,
  `SoLuongTon` int(11) DEFAULT NULL,
  `SoLuongBan` int(11) DEFAULT NULL,
  `SoLuocXem` int(11) DEFAULT NULL,
  `MoTa` text COLLATE utf8_unicode_ci,
  `BiXoa` tinyint(1) DEFAULT '0',
  `MaLoaiSanPham` int(11) NOT NULL,
  `MaHangSanXuat` int(11) NOT NULL,
  PRIMARY KEY (`MaSanPham`),
  KEY `fk_SanPham_LoaiSanPham1_idx` (`MaLoaiSanPham`),
  KEY `fk_SanPham_HangSanXuat1_idx` (`MaHangSanXuat`),
  CONSTRAINT `fk_SanPham_HangSanXuat1` FOREIGN KEY (`MaHangSanXuat`) REFERENCES `hangsanxuat` (`MaHangSanXuat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_SanPham_LoaiSanPham1` FOREIGN KEY (`MaLoaiSanPham`) REFERENCES `loaisanpham` (`MaLoaiSanPham`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sanpham
-- ----------------------------
INSERT INTO `sanpham` VALUES ('46', 'Khám Phá Luật Hấp Dẫn Để Mở Khóa Thành Công', 'Orison Swett Marden', '1.jpg', '100000', '2012-08-25 00:00:00', '14', '9', '25', '', '1', '1', '3');
INSERT INTO `sanpham` VALUES ('47', 'Thất Bại Để Thành Công', 'Nhiều Tác Giả', '2.jpg', '120000', '2012-05-01 00:00:00', '14', '6', '4', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('48', 'Cuộc Phiêu Lưu Kỳ Thú Của Ếch Xanh Cùng Những Người Bạn Tuyệt Vời', 'Lê Hữu Nam', '3.jpg', '150000', '2012-09-12 00:00:00', '23', '2', '9', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('49', 'Cô Gái Hà Nội Mập Mặc Burqa', 'Nguyễn Hải Nhật Huy', '4.jpg', '50000', '2012-07-03 00:00:00', '30', '0', '8', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('50', 'Làm Như Chơi', 'Minh Niệm', '5.jpg', '90000', '2012-01-01 00:00:00', '24', '6', '14', '', '0', '5', '2');
INSERT INTO `sanpham` VALUES ('51', 'Định Vị Cá Nhân', 'Nhiều Tác Giả', '6.jpg', '120000', '2012-08-15 00:00:00', '28', '7', '8', '', '0', '3', '1');
INSERT INTO `sanpham` VALUES ('52', 'Khiêu Vũ Với Ngoài Bút', 'Joseph Sugarman', '8.jpg', '70000', '2012-09-01 00:00:00', '38', '3', '38', '', '0', '3', '1');
INSERT INTO `sanpham` VALUES ('53', 'Những Vụ Kỳ Án Của Sherlock Holmes', 'Arthur Conan Doyle', '11.jpg', '80000', '2012-10-02 00:00:00', '19', '0', '0', '', '0', '3', '1');
INSERT INTO `sanpham` VALUES ('54', 'Cậu Bé Chăn Cừu', 'Aesop', '12.jpg', '92000', '2012-10-04 00:00:00', '10', '2', '14', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('55', 'Ngọc Lê Hồn', 'Từ Chẩm Á', '13.jpg', '40000', '2012-09-25 00:00:00', '5', '5', '1', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('56', 'Thuốc Mê', 'Thâm Tâm', '14.jpg', '80000', '2012-08-27 00:00:00', '19', '3', '3', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('57', 'Tiệm Đồ Cổ Á Xá', 'Huyền Sắc', '16.jpg', '60000', '2012-07-13 00:00:00', '50', '3', '5', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('58', 'Một Với Một Là Ba', 'Dave Trott', '17.jpg', '100000', '2012-09-15 00:00:00', '60', '3', '2', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('59', 'Thuật Hùng Biện', 'Brian Tracy', '18.jpg', '150000', '2012-09-14 00:00:00', '30', '30', '22', '', '0', '1', '3');
INSERT INTO `sanpham` VALUES ('60', 'Kinh Điển Về Khởi Nghiệp', 'Bill Aulet', '19.jpg', '150000', '2012-06-12 00:00:00', '19', '13', '24', '', '0', '5', '2');
INSERT INTO `sanpham` VALUES ('61', 'Bùi Sơ Ảnh', 'Lục Xu', '20.jpg', '40000', '2012-07-12 00:00:00', '20', '12', '13', '', '0', '5', '2');
INSERT INTO `sanpham` VALUES ('62', 'Quãng Thời Gian Trong Hồi Ức', 'Diệp Tử', '21.jpg', '70000', '2012-08-17 00:00:00', '35', '12', '12', '', '0', '5', '2');
INSERT INTO `sanpham` VALUES ('63', 'Canh Bạc Tình Yêu', 'Kim Bính', '22.jpg', '60000', '2012-10-05 00:00:00', '23', '28', '30', '', '0', '5', '2');
INSERT INTO `sanpham` VALUES ('64', 'Tạm Biệt Cà Rốt Và Cây Gậy', 'TS. Paul L. Marciano', '23.jpg', '90000', '2012-10-07 00:00:00', '28', '2', '24', '', '0', '5', '2');
INSERT INTO `sanpham` VALUES ('65', 'Sào Huyệt Của Những Ông Trùm', 'James B.Stewart', '24.jpg', '150000', '2012-10-08 00:00:00', '39', '2', '6', '', '0', '2', '4');

-- ----------------------------
-- Table structure for taikhoan
-- ----------------------------
DROP TABLE IF EXISTS `taikhoan`;
CREATE TABLE `taikhoan` (
  `MaTaiKhoan` int(11) NOT NULL AUTO_INCREMENT,
  `TenDangNhap` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `MatKhau` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `TenHienThi` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DiaChi` varchar(256) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DienThoai` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BiXoa` tinyint(1) DEFAULT '0',
  `MaLoaiTaiKhoan` int(11) NOT NULL,
  PRIMARY KEY (`MaTaiKhoan`),
  KEY `fk_TaiKhoan_LoaiTaiKhoan_idx` (`MaLoaiTaiKhoan`),
  CONSTRAINT `fk_TaiKhoan_LoaiTaiKhoan` FOREIGN KEY (`MaLoaiTaiKhoan`) REFERENCES `loaitaikhoan` (`MaLoaiTaiKhoan`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of taikhoan
-- ----------------------------
INSERT INTO `taikhoan` VALUES ('1', 'qq', '25d55ad283aa400af464c76d713c07ad', 'Đức Huy', '227 - Nguyễn Văn Cừ - Q.5', '01234567890', 'ndhuy@gmail.com', '0', '2');
INSERT INTO `taikhoan` VALUES ('5', 'admin', '25d55ad283aa400af464c76d713c07ad', 'Admin website', 'Baby Shop', '0909123456', 'admin@babyshop.vn', '0', '2');
INSERT INTO `taikhoan` VALUES ('6', 'lhnhuan', '25d55ad283aa400af464c76d713c07ad', 'Lê Hữu Nhuận', '', '01637644636', 'huunhuan2002@gmail.com', '0', '1');
INSERT INTO `taikhoan` VALUES ('7', 'hihi', '25d55ad283aa400af464c76d713c07ad', 'Lee Hu', '', '', 'a@gmail.com', '0', '1');
INSERT INTO `taikhoan` VALUES ('8', 'test', '2afb82f8675eba304821bf33996627aa', 'Lê Hữu Nhuận', '', '', 'a@gmail.com', '0', '1');
INSERT INTO `taikhoan` VALUES ('10', 'ndnhut', '25d55ad283aa400af464c76d713c07ad', 'Nguyễn Đông Nhựt', '', '', 'a@gmail.com', '0', '1');
INSERT INTO `taikhoan` VALUES ('11', 'kaka', '25d55ad283aa400af464c76d713c07ad', 'Lê Hữu Nhuận', '', '', 'a@gmail.com', '0', '1');
INSERT INTO `taikhoan` VALUES ('12', 'testing1', '25d55ad283aa400af464c76d713c07ad', 'Lê Hữu NHuận', '', '', 'a@gmail.com', '0', '2');

-- ----------------------------
-- Table structure for tinhtrang
-- ----------------------------
DROP TABLE IF EXISTS `tinhtrang`;
CREATE TABLE `tinhtrang` (
  `MaTinhTrang` int(11) NOT NULL AUTO_INCREMENT,
  `TenTinhTrang` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`MaTinhTrang`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of tinhtrang
-- ----------------------------
INSERT INTO `tinhtrang` VALUES ('1', 'Đặt hàng');
INSERT INTO `tinhtrang` VALUES ('2', 'Đang giao hàng');
INSERT INTO `tinhtrang` VALUES ('3', 'Thanh toán');
INSERT INTO `tinhtrang` VALUES ('4', 'Hủy');
