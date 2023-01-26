-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 06, 2023 lúc 07:39 AM
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
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `parentid` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `code`, `slug`, `images`, `parentid`, `value`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Điện thoại', 'Đien-thoai', 'đien-thoai', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672642289/uyegrrjoldw1ztzpkfdu.webp\"]', '0', 'loại điện thoại', 1, '2023-01-02 07:31:07', '2023-01-02 07:23:53'),
(2, 'san pham 2', 'smart-watch', 'smart-watch', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672644464/lscdmipvz3ynum6ocvws.webp\"]', '0', 'đồng hồ thông minh', 1, '2023-01-02 07:30:46', '2023-01-03 03:54:42'),
(3, 'laptop', 'laptop', 'laptop', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672644618/hbdrwh4ncunfetshgjyz.webp\"]', '0', 'máy tính xách tay', 1, '2023-01-02 07:30:20', '2023-01-02 07:30:20'),
(4, 'loa', 'loa', 'loa', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672644643/fqsx7o8kqqjzq538yvyv.webp\"]', '0', 'loa máy tính', 1, '2023-01-02 07:30:46', '2023-01-02 07:27:48'),
(5, 'phụ kiện', 'phu-kien', 'phu-kien', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672644665/r9bj3b4byrvlep1oelgp.webp\"]', '0', 'phụ kiện kèm theo ', 1, '2023-01-02 06:51:31', '2023-01-02 07:31:07'),
(6, 'SA PHAM demo', 'SA-PHAM-demo', 'sa-pham-demo', '\"\"', '0', 'gfgh', 0, '2023-01-05 01:42:18', '2023-01-05 01:43:30'),
(7, 'ffg124478', 'ffg124478', 'ffg124478', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1672884123/zwwqyeqshy0jmmb3wrpu.webp\"]', '0', 'dsf144', 0, '2023-01-05 01:43:39', '2023-01-06 05:38:03');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
