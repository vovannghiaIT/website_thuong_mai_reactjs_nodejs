-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 06, 2023 lúc 07:40 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webthuongmai`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `star` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `pricesale` float DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `categoryId`, `images`, `star`, `slug`, `description`, `number`, `price`, `pricesale`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'san pham 2', 2, '\"\"', '4', 'san-pham-1', '\"\\\"demo san pham\\\"\"', 5, 17000, 10000, 0, '2023-01-03 00:58:57', '2023-01-04 04:56:19'),
(5, 'sản phẩm demo', 2, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672717241/e0ss7ldlfz4jktkamkel.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672717244/dsjmotmtxyv1kguubyuc.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672717247/tuqfrgc1711xvbj5afsu.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672717257/f1almr16wz2f7eywlujn.webp\"]', '0', 'san-pham-demo', '\"\\\"\\\\\\\"<p>sản phẩm demo</p>\\\\\\\"\\\"\"', 20, 2356790, 0, 1, '2023-01-03 03:41:13', '2023-01-03 04:10:12'),
(6, 'Điện thoại', 1, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672717388/kbr0lflvldv8bbeoxqkx.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672717393/xpotbnehffqdfhet62ys.webp\"]', '0', 'đien-thoai', '\"<p>sản phẩm điện thoại</p>\"', 124, 23456, 0, 1, '2023-01-03 03:43:19', '2023-01-03 03:43:19'),
(7, 'sản phẩm demo2', 4, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985962/t5ek5dsdy6vtl4x5qzlk.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985964/wyoirus097c0qnd5vqs7.webp\"]', '0', 'san-pham-demo2', '\"<p>ádfdf</p>\"', 12345, 1234, 134, 1, '2023-01-04 00:39:06', '2023-01-06 06:19:27'),
(8, 'sadd', 6, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985945/e84b8bcp9ha8eatcws0j.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985948/kxx4ugkwmvx0rzymhguu.webp\"]', '0', 'sadd', '\"<p>\\\"\\\\\\\"</p><p>ádfff</p><p>\\\\\\\"\\\"</p>\"', 2456, 2455, 24, 1, '2023-01-05 02:28:46', '2023-01-06 06:19:10'),
(9, 'sdf1334', 1, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985913/oo02u1assun2kpc8ry1y.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985918/ibikhmiqrmd0o6zmigij.webp\"]', '0', 'sdf1334', '\"<p>\\\"\\\\\\\"</p><p>dsfggfđfg</p><p>sadjd</p><p>usdgud</p><p>shsd</p><p>ksahd</p><p>kjshadu</p><p>khsad</p><p>&nbsp;</p><p>\\\\\\\"\\\"</p>\"', 34453, 2133640, 0, 1, '2023-01-05 03:21:41', '2023-01-06 06:18:43'),
(10, 'Điện thoại ', 1, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985706/brxfw966t84stnsonlmm.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985712/bgwyrccndkuvquadne2e.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672985716/jnwjfxoduextiavcrvr3.webp\"]', '0', 'đien-thoai-', '\"<p>\\\"\\\\\\\"</p><p>5tgt</p><p>\\\\\\\"\\\"</p>\"', 1234, 344, 44, 1, '2023-01-05 06:27:01', '2023-01-06 06:15:22');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
