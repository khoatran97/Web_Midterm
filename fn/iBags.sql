-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 26, 2018 at 07:01 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ibags`
--

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `madon` int(11) NOT NULL,
  `makhachhang` int(11) DEFAULT NULL,
  `magiaodich` int(11) DEFAULT NULL,
  `ngaydat` date DEFAULT NULL,
  `tonggiatri` int(11) DEFAULT NULL,
  `trangthai` varchar(15) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`madon`, `makhachhang`, `magiaodich`, `ngaydat`, `tonggiatri`, `trangthai`) VALUES
(1, NULL, NULL, '2018-01-01', 9397, 'đang giao'),
(2, NULL, NULL, '2018-02-01', 9397, 'chưa giao'),
(3, NULL, NULL, '2017-01-01', 9097, 'đã giao'),
(4, NULL, NULL, '2018-01-06', 9397, 'đã giao'),
(27, 1, NULL, '2018-06-26', 1150000, 'chưa giao'),
(28, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(30, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(31, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(36, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(37, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(38, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(39, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(40, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(41, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(42, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(43, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(44, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(45, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(46, 1, NULL, '2018-06-26', 575000, 'chưa giao'),
(47, 1, NULL, '2018-06-26', 575000, 'chưa giao');

-- --------------------------------------------------------

--
-- Table structure for table `giaodich`
--

CREATE TABLE `giaodich` (
  `magiaodich` int(11) NOT NULL,
  `makhach` int(11) DEFAULT NULL,
  `sotien` int(11) DEFAULT NULL,
  `conggiaodich` int(11) DEFAULT NULL,
  `diachi` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `giaodich`
--

INSERT INTO `giaodich` (`magiaodich`, `makhach`, `sotien`, `conggiaodich`, `diachi`) VALUES
(1, NULL, NULL, 1, 'thủ đức'),
(47, NULL, NULL, 0, 'khu b thủ đức tp');

-- --------------------------------------------------------

--
-- Table structure for table `hinhanh`
--

CREATE TABLE `hinhanh` (
  `mahinhanh` int(11) NOT NULL,
  `masanpham` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `maloai` int(11) NOT NULL,
  `tenloai` varchar(30) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`maloai`, `tenloai`) VALUES
(1, 'Túi đeo chéo nữ'),
(2, 'Túi xách nữ'),
(3, 'Balo thời trang'),
(4, 'Ví/Bóp nữ'),
(5, 'Cặp văn phòng phẩm'),
(6, 'Túi vải/Túi tote'),
(7, 'Phụ kiện túi ví khác');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `masanpham` int(11) NOT NULL,
  `maloai` int(11) DEFAULT NULL,
  `mathuonghieu` int(11) DEFAULT NULL,
  `ten` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `xuatxu` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `gia` int(11) DEFAULT NULL,
  `chatlieu` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `kichthuoc` varchar(20) DEFAULT NULL,
  `trongluong` decimal(10,0) DEFAULT NULL,
  `luotmua` int(11) DEFAULT '0',
  `luotxem` int(11) DEFAULT '0',
  `soluong` int(11) DEFAULT '10',
  `ngaynhap` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`masanpham`, `maloai`, `mathuonghieu`, `ten`, `xuatxu`, `gia`, `chatlieu`, `kichthuoc`, `trongluong`, `luotmua`, `luotxem`, `soluong`, `ngaynhap`) VALUES
(1, 1, 1, 'Túi DC_001', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-01 00:00:00'),
(2, 1, 2, 'Túi DC_002', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-01 00:00:00'),
(3, 1, 3, 'Túi DC_003', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-01 00:00:00'),
(4, 1, 4, 'Túi DC_004', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-01 00:00:00'),
(5, 1, 5, 'Túi DC_005', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-02 00:00:00'),
(6, 1, 6, 'Túi DC_006', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 3, 0, 7, '2017-01-03 00:00:00'),
(7, 1, 7, 'Túi DC_007', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-04 00:00:00'),
(8, 1, 8, 'Túi DC_008', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(9, 1, 9, 'Túi DC_009', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(10, 2, 1, 'Túi TX_001', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(11, 2, 2, 'Túi TX_002', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(12, 2, 3, 'Túi TX_003', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 3, 2, 7, '2017-01-05 00:00:00'),
(13, 2, 4, 'Túi TX_004', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 3, 10, '2017-01-05 00:00:00'),
(14, 2, 5, 'Túi TX_005', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 3, 2, 7, '2017-01-05 00:00:00'),
(15, 2, 6, 'Túi TX_006', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 1, 7, 9, '2017-01-05 00:00:00'),
(16, 2, 7, 'Túi TX_007', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 9, 17, 29, '2017-01-05 00:00:00'),
(17, 2, 8, 'Túi TX_008', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 1, 1, 9, '2017-01-05 00:00:00'),
(18, 3, 1, 'Túi BL_001', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(19, 3, 2, 'Túi BL_002', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(20, 3, 3, 'Túi BL_003', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-05 00:00:00'),
(21, 3, 4, 'Túi BL_004', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-10 00:00:00'),
(22, 3, 5, 'Túi BL_005', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-10 00:00:00'),
(23, 3, 6, 'Túi BL_006', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-10 00:00:00'),
(24, 3, 7, 'Túi BL_007', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-10 00:00:00'),
(25, 4, 1, 'Túi V_001', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-10 00:00:00'),
(26, 4, 2, 'Túi V_002', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-10-10 00:00:00'),
(27, 4, 3, 'Túi V_003', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-10-10 00:00:00'),
(28, 4, 4, 'Túi V_004', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-10-10 00:00:00'),
(29, 4, 5, 'Túi V_005', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-10-10 00:00:00'),
(30, 4, 6, 'Túi V_006', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 3, 5, 7, '2017-10-02 00:00:00'),
(31, 1, 6, 'Túi DC_006', 'Mỹ', 575000, 'Da tổng hợp', '20.5 x 7 x 14.5 cm', '300', 0, 0, 10, '2017-01-03 00:00:00'),
(36, 6, 5, 'Túi Kheaa', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL),
(37, 2, 5, 'Balo Mare', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL),
(38, 5, 5, 'Túi sách Koro', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL),
(39, 6, 5, 'Túi sách Dore', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL),
(40, 2, 5, 'Balo LUXA', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL),
(41, 5, 5, 'Balo Namio', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL),
(42, 6, 5, 'Túi Kiria', 'VN', 40000, 'Cotton', '60x100', '1', NULL, NULL, 10, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sanpham_donhang`
--

CREATE TABLE `sanpham_donhang` (
  `madon` int(11) NOT NULL,
  `masanpham` int(11) NOT NULL,
  `soluong` int(11) DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sanpham_donhang`
--

INSERT INTO `sanpham_donhang` (`madon`, `masanpham`, `soluong`) VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(2, 1, 1),
(2, 2, 1),
(27, 30, 1),
(28, 14, 1),
(28, 16, 1),
(28, 17, 1),
(30, 16, 1),
(31, 6, 1),
(31, 12, 1),
(31, 14, 1),
(31, 16, 1),
(36, 15, 1),
(37, 6, 1),
(38, 14, 1),
(39, 16, 1),
(40, 16, 1),
(41, 12, 1),
(42, 16, 1),
(43, 6, 1),
(44, 16, 1),
(45, 16, 1),
(46, 12, 1),
(47, 30, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('421EeQr7A-TBPfC0GVBxozwfieocf2Bx', 1530039054, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"Sumproduct\":38,\"user\":{\"mathanhvien\":1,\"tenthanhvien\":\"Mark Tuan\",\"username\":\"myna\",\"password\":\"7a509120a5fdce91a31d96e4dc43e93c26f16a6ce74f08e634d14a892ee021e2\",\"quyenhan\":0,\"sdt\":\"0974410174\",\"email\":\"yukutat91@gmail.com\",\"diachi\":\"Phan Thiết\",\"gioitinh\":0,\"ngaysinh\":\"1997-01-08T17:00:00.000Z\"},\"cart\":[{\"proID\":\"16\",\"Quantity\":1},{\"proID\":\"14\",\"Quantity\":1}]}'),
('IfffWHXMbogJy8ss9A10ygsXPn4NJAss', 1530075296, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"isLogged\":true,\"Sumproduct\":38,\"user\":{\"mathanhvien\":1,\"tenthanhvien\":\"Mark Tuan\",\"username\":\"myna\",\"password\":\"7a509120a5fdce91a31d96e4dc43e93c26f16a6ce74f08e634d14a892ee021e2\",\"quyenhan\":0,\"sdt\":\"0974410174\",\"email\":\"yukutat91@gmail.com\",\"diachi\":\"Phan Thiết\",\"gioitinh\":0,\"ngaysinh\":\"1997-01-08T17:00:00.000Z\"},\"cart\":[]}');

-- --------------------------------------------------------

--
-- Table structure for table `thanhvien`
--

CREATE TABLE `thanhvien` (
  `mathanhvien` int(11) NOT NULL,
  `tenthanhvien` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` char(64) DEFAULT NULL,
  `quyenhan` tinyint(4) DEFAULT NULL,
  `sdt` varchar(12) CHARACTER SET utf8 DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `gioitinh` tinyint(4) DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thanhvien`
--

INSERT INTO `thanhvien` (`mathanhvien`, `tenthanhvien`, `username`, `password`, `quyenhan`, `sdt`, `email`, `diachi`, `gioitinh`, `ngaysinh`) VALUES
(1, 'Mark Tuan', 'myna', '7a509120a5fdce91a31d96e4dc43e93c26f16a6ce74f08e634d14a892ee021e2', 0, '0974410174', 'yukutat91@gmail.com', 'Phan Thiết', 0, '1997-01-09'),
(2, 'Nguyễn Ngọc Xuân Mỹ', 'nana', '7a509120a5fdce91a31d96e4dc43e93c26f16a6ce74f08e634d14a892ee021e2', 1, NULL, NULL, NULL, NULL, NULL),
(3, 'Yi-en Tuan', 'mtuan93', '7a509120a5fdce91a31d96e4dc43e93c26f16a6ce74f08e634d14a892ee021e2', 0, '0902207405', '123@', 'LA', 0, '1993-09-04'),
(4, '1', '1', '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b', 0, '1', '1', '1', 0, '2018-06-13');

-- --------------------------------------------------------

--
-- Table structure for table `thuonghieu`
--

CREATE TABLE `thuonghieu` (
  `mathuonghieu` int(11) NOT NULL,
  `tenthuonghieu` varchar(30) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thuonghieu`
--

INSERT INTO `thuonghieu` (`mathuonghieu`, `tenthuonghieu`) VALUES
(1, 'Gucci'),
(2, 'SaveMyBag'),
(3, 'Briton Bag'),
(4, 'Versace'),
(5, 'Jockey'),
(6, 'Prada'),
(7, 'Bella Bag'),
(8, 'Duro Bag'),
(9, 'TopBag'),
(10, 'Givenchy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`madon`),
  ADD KEY `makhachhang` (`makhachhang`),
  ADD KEY `magiaodich` (`magiaodich`);

--
-- Indexes for table `giaodich`
--
ALTER TABLE `giaodich`
  ADD PRIMARY KEY (`magiaodich`),
  ADD KEY `makhach` (`makhach`);

--
-- Indexes for table `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD PRIMARY KEY (`mahinhanh`),
  ADD KEY `masanpham` (`masanpham`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`maloai`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`masanpham`),
  ADD KEY `maloai` (`maloai`),
  ADD KEY `mathuonghieu` (`mathuonghieu`);

--
-- Indexes for table `sanpham_donhang`
--
ALTER TABLE `sanpham_donhang`
  ADD PRIMARY KEY (`madon`,`masanpham`),
  ADD KEY `masanpham` (`masanpham`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `thanhvien`
--
ALTER TABLE `thanhvien`
  ADD PRIMARY KEY (`mathanhvien`);

--
-- Indexes for table `thuonghieu`
--
ALTER TABLE `thuonghieu`
  ADD PRIMARY KEY (`mathuonghieu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donhang`
--
ALTER TABLE `donhang`
  MODIFY `madon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `giaodich`
--
ALTER TABLE `giaodich`
  MODIFY `magiaodich` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `hinhanh`
--
ALTER TABLE `hinhanh`
  MODIFY `mahinhanh` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `maloai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `masanpham` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `thanhvien`
--
ALTER TABLE `thanhvien`
  MODIFY `mathanhvien` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `thuonghieu`
--
ALTER TABLE `thuonghieu`
  MODIFY `mathuonghieu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`makhachhang`) REFERENCES `thanhvien` (`mathanhvien`),
  ADD CONSTRAINT `donhang_ibfk_2` FOREIGN KEY (`magiaodich`) REFERENCES `giaodich` (`magiaodich`);

--
-- Constraints for table `giaodich`
--
ALTER TABLE `giaodich`
  ADD CONSTRAINT `giaodich_ibfk_1` FOREIGN KEY (`makhach`) REFERENCES `thanhvien` (`mathanhvien`);

--
-- Constraints for table `hinhanh`
--
ALTER TABLE `hinhanh`
  ADD CONSTRAINT `hinhanh_ibfk_1` FOREIGN KEY (`masanpham`) REFERENCES `sanpham` (`masanpham`);

--
-- Constraints for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`maloai`) REFERENCES `loaisanpham` (`maloai`),
  ADD CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`mathuonghieu`) REFERENCES `thuonghieu` (`mathuonghieu`);

--
-- Constraints for table `sanpham_donhang`
--
ALTER TABLE `sanpham_donhang`
  ADD CONSTRAINT `sanpham_donhang_ibfk_1` FOREIGN KEY (`madon`) REFERENCES `donhang` (`madon`),
  ADD CONSTRAINT `sanpham_donhang_ibfk_2` FOREIGN KEY (`masanpham`) REFERENCES `sanpham` (`masanpham`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
