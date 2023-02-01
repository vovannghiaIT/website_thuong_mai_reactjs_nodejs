-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 01, 2023 at 07:01 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webthuongmai`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `images` longtext,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`, `slug`, `images`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'a234', 'a - a', NULL, 0, '2023-01-16 00:18:21', '2023-01-17 01:06:58'),
(3, 'jkhuy', 'jkhuy', NULL, 0, '2023-01-16 00:39:48', '2023-01-16 01:39:44'),
(5, 'sam sung', 'sam-sung', NULL, 1, '2023-01-16 00:40:03', '2023-01-16 00:40:03'),
(6, 'i3yy', 'i3yy', NULL, 1, '2023-01-16 00:40:12', '2023-01-16 02:30:35'),
(7, 'jbdjfds', 'jbdjfds', NULL, 1, '2023-01-16 00:45:54', '2023-01-16 00:45:54'),
(8, 'ehur 134e78', 'ehur-134e78', NULL, 1, '2023-01-16 00:46:01', '2023-01-16 01:16:37'),
(9, 'fdkjhdfk', 'fdkjhdfk', NULL, 1, '2023-01-25 07:50:25', '2023-01-25 07:50:25'),
(10, 'sđ', 'sđ', NULL, 1, '2023-01-29 10:26:57', '2023-01-29 10:26:57'),
(11, 'qưdeed', 'qudeed', NULL, 1, '2023-01-29 10:27:00', '2023-01-29 10:27:00'),
(12, 'ewfrrr', 'ewfrrr', NULL, 1, '2023-01-29 10:27:03', '2023-01-29 10:27:03'),
(13, 'etyuiu', 'etyuiu', NULL, 1, '2023-01-29 10:27:06', '2023-01-29 10:27:06'),
(14, 'retytyy', 'retytyy', NULL, 1, '2023-01-29 10:27:08', '2023-01-29 10:27:08'),
(15, 'rèdsdfg435', 'redsdfg435', NULL, 0, '2023-01-29 10:27:13', '2023-01-29 10:27:26'),
(16, 'dxhgtj', 'dxhgtj', NULL, 1, '2023-01-29 10:35:00', '2023-01-29 10:35:00');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `images` longtext,
  `parentid` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `code`, `slug`, `images`, `parentid`, `value`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'rt', 'rt', 'rt', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1673745530/xss9gzj7hswsgjttwybm.webp\"]', '0', 'rt', 1, '2023-01-15 01:18:54', '2023-01-30 07:15:39'),
(2, 'guyg', 'guyg', 'guyg', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1673745642/mdgfx4vu3qr3bn1sgkkg.webp\"]', '0', 'bhuyy', 1, '2023-01-15 01:20:44', '2023-01-15 01:20:44'),
(3, 'Điện thoại', 'Đien-thoai', 'đien-thoai', '\"\"', '0', 'jhdsbd', 0, '2023-01-15 02:14:56', '2023-01-15 02:15:00'),
(4, 'Điện thoại', 'Đien-thoai', 'đien-thoai', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1673748916/uygo9vqf3ndscvehocn2.webp\"]', '0', '34421', 1, '2023-01-15 02:15:18', '2023-01-30 07:15:27'),
(5, 'dfg', 'dfg', 'dfg', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674635847/avuaerwvnhorhgf471wn.webp\"]', '0', 'gg', 1, '2023-01-25 07:50:17', '2023-01-25 08:37:29'),
(6, 'lọiasiuhd', 'loiasiuhd', 'loiasiuhd', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674636022/v9adc78bciazxo7mevvy.webp\"]', '0', '8y787t76', 1, '2023-01-25 08:40:24', '2023-01-25 08:40:24'),
(7, 'uhur idsfhdsyu jidhfi', 'uhur-idsfhdsyu-jidhfi', 'uhur-idsfhdsyu-jidhfi', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674795987/jqtsetxjjqkk8iunnboi.webp\"]', '0', 'jhsdayg', 1, '2023-01-27 05:06:30', '2023-01-30 07:15:35'),
(8, '34r', '34r', '34r', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674798199/sf4jx6zahchisviprtlm.webp\"]', '0', 'rrte', 1, '2023-01-27 05:43:27', '2023-01-30 07:15:30'),
(9, 'fgtry', 'fgtry', 'fgtry', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674806620/tirubcm4kysqwggz9liu.webp\"]', '0', 'hguu7', 1, '2023-01-27 08:03:43', '2023-01-27 08:03:43'),
(10, 'sffs', 'sffs', 'sffs', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674807172/d3tvlc7tomb1yg8ezviy.webp\"]', '0', 'sđ', 1, '2023-01-27 08:12:53', '2023-01-27 08:12:53'),
(11, 'dsdf', 'dsdf', 'dsdf', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674807221/frwfalrgzfyscvjmmckm.webp\"]', '0', 'sdfsf', 1, '2023-01-27 08:13:43', '2023-01-27 08:13:43'),
(12, 'loai 2', 'loai-2', 'loai-2', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674963208/v21xui2nytoy2th8xwqi.webp\"]', '0', 'dhuuidfh', 1, '2023-01-29 03:18:37', '2023-01-29 03:33:31'),
(13, 'afs', 'afs', 'afs', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674987576/fbkuobar8vgoy9kbnzqo.webp\"]', '0', 'dfsdrf', 1, '2023-01-29 10:19:39', '2023-01-29 10:19:39'),
(14, 'sadfd', 'sadfd', 'sadfd', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674987594/u90eo6v6uvoyrecuz2s2.webp\"]', '0', 'ẻte', 1, '2023-01-29 10:19:57', '2023-01-29 10:19:57'),
(15, 'đfgg', 'đfgg', 'đfgg', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674987604/s3dfufmg884pjxjjierx.webp\"]', '0', 'fgghh', 1, '2023-01-29 10:20:07', '2023-01-29 10:20:07'),
(16, 'kjhsdfkd', 'kjhsdfkd', 'kjhsdfkd', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675036745/dfyljt10bledp0yq3dxk.webp\"]', '0', 'iorueut', 1, '2023-01-29 23:59:09', '2023-01-29 23:59:09'),
(17, 'Điện thoại', 'Đien-thoai', 'đien-thoai', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041856/xpsvvxwokajhuhyukygh.webp\"]', '0', 'jsadhiufd', 1, '2023-01-30 01:24:17', '2023-01-30 01:24:17'),
(18, 'Máy Tính', 'May-Tinh', 'may-tinh', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041872/pdcd97xtz98ymoarmlyl.webp\"]', '0', 'jsdgfuyuyf', 1, '2023-01-30 01:24:34', '2023-01-30 01:24:34'),
(19, 'Đồng hồ', 'Đong-ho', 'đong-ho', '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041892/zeyowl8osjikxqgm7ywc.webp\"]', '0', 'đồng - hồ', 1, '2023-01-30 01:24:54', '2023-01-30 01:24:54');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` varchar(255) NOT NULL,
  `image` longtext,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `operas`
--

CREATE TABLE `operas` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `images` longtext,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `operas`
--

INSERT INTO `operas` (`id`, `name`, `slug`, `images`, `status`, `createdAt`, `updatedAt`) VALUES
(3, 'lkhsđ', 'lkhsđ', NULL, 0, '2023-01-16 02:20:12', '2023-01-16 02:26:50'),
(4, 'sdf', 'sdf', NULL, 1, '2023-01-16 02:20:29', '2023-01-16 02:20:29'),
(5, 'kdjf', 'kdjf', NULL, 0, '2023-01-16 02:20:54', '2023-01-16 02:31:37'),
(6, 'i3yy', 'i3yy', NULL, 1, '2023-01-16 02:20:58', '2023-01-16 02:31:44'),
(7, 'Android', 'android', NULL, 1, '2023-01-16 02:21:26', '2023-01-16 02:21:26'),
(8, 'dhuif', 'dhuif', NULL, 1, '2023-01-16 02:30:20', '2023-01-16 02:30:20'),
(9, 'dsfhfj jdhd', 'dsfhfj-jdhd', NULL, 1, '2023-01-16 02:30:23', '2023-01-16 02:30:23'),
(10, 'ehuer', 'ehuer', NULL, 0, '2023-01-16 02:30:26', '2023-01-16 02:30:30'),
(12, '', '', NULL, 0, '2023-01-16 02:39:13', '2023-01-16 02:39:16'),
(13, '', '', NULL, 0, '2023-01-16 02:39:23', '2023-01-16 02:39:26'),
(14, '', '', NULL, 0, '2023-01-16 02:39:35', '2023-01-16 02:39:39'),
(15, 'sadd', 'sadd', NULL, 1, '2023-01-29 10:28:27', '2023-01-29 10:28:27'),
(16, 'dsff', 'dsff', NULL, 1, '2023-01-29 10:28:30', '2023-01-29 10:28:30'),
(17, 'sdfdf', 'sdfdf', NULL, 1, '2023-01-29 10:28:32', '2023-01-29 10:28:32'),
(18, 'sđff', 'sđff', NULL, 1, '2023-01-29 10:28:35', '2023-01-29 10:28:35'),
(19, 'sdf', 'sdf', NULL, 1, '2023-01-29 10:28:37', '2023-01-29 10:28:37'),
(20, 'sdffaae5667', 'sdffaae5667', NULL, 1, '2023-01-29 10:28:40', '2023-01-29 10:28:51'),
(21, 'rrhju', 'rrhju', NULL, 1, '2023-01-29 10:37:17', '2023-01-29 10:37:17');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `orderId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `userId` varchar(255) DEFAULT NULL,
  `exportdate` varchar(255) DEFAULT NULL,
  `deliveryaddress` varchar(255) DEFAULT NULL,
  `deliveryname` varchar(255) DEFAULT NULL,
  `deliveryphone` varchar(255) DEFAULT NULL,
  `deliveryemail` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `operaId` int DEFAULT NULL,
  `brandId` int DEFAULT NULL,
  `images` longtext,
  `star` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` longtext,
  `number` int DEFAULT NULL,
  `price` float DEFAULT NULL,
  `pricesale` float DEFAULT NULL,
  `status` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `categoryId`, `operaId`, `brandId`, `images`, `star`, `slug`, `description`, `number`, `price`, `pricesale`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'jhui', 2, 8, 8, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674625648/bmnbls0o1lbev55temti.webp\"]', '0', 'jhui', '\"d\"', 0, 6667, 86, 1, '2023-01-16 02:53:50', '2023-01-27 02:21:07'),
(3, 'san phẩm text2', 3, 7, 7, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1673837676/apbeg9wzy5fir7rnojmi.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674642912/uedegzgzxkyoty6plgem.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674642916/ydtma78exshqqhelqlgs.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674642920/ho0j9t6iloxmhkknuo6m.webp\"]', '0', 'san-pham-text2', '\"<p>d</p>\"', 30, 666, 666, 1, '2023-01-16 02:54:59', '2023-01-27 02:21:16'),
(4, 'sản phẩm demo', 2, 7, 7, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674630904/zxpdmlanaa2856nxdxyz.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674630908/roqrmeu1y7tnble6ckkh.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674630912/vwd9bfydhcogdvg3ixx7.webp\"]', '0', 'san-pham-demo', '\"d\"', 795, 455, 455, 1, '2023-01-16 03:04:21', '2023-01-29 10:42:56'),
(6, 'a29999', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 99, NULL, NULL, 0, '2023-01-25 07:53:50', '2023-01-25 08:29:17'),
(7, 'a29999', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 220, NULL, NULL, 0, '2023-01-25 08:06:59', '2023-01-25 08:29:23'),
(8, 'ugyy', 1, 6, 7, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674635390/qimln683yuvcv1pimclg.webp\"]', '0', 'ugyy', '\"<p>jhhjhj</p>\"', NULL, 764, 55, 1, '2023-01-25 08:29:52', '2023-01-25 11:27:08'),
(9, 'jhgdr', 2, 8, 7, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674635494/lsphwlxer9u1v2oowvt9.webp\"]', '0', 'jhgdr', '\"<p>564545hjgh</p>\"', 956, 6, 6, 1, '2023-01-25 08:31:41', '2023-02-01 00:32:34'),
(10, 'hsajgdsu', 5, 6, 8, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674638779/knlagxy8robwxfpibdf9.webp\"]', '0', 'hsajgdsu', '\"<p>jdsfuigydfusdguy</p><p>kudhuhdfs</p><p>lihkdsf</p><p>&nbsp;</p>\"', 673, 20000, 20000, 1, '2023-01-25 09:26:37', '2023-02-01 00:31:20'),
(11, 'jhsadgjdg99', 5, 7, 8, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674638839/a7lcew48jvl02elnru7n.webp\"]', '0', 'jhsadgjdg99', '\"<p>jbasdbhad</p><p>kjbdjk</p>\"', 92035, 9997, 9997, 1, '2023-01-25 09:27:29', '2023-02-01 00:14:18'),
(13, 'lksajksad', 9, 8, 7, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674816547/sydrc3wjyo8ynpu3pnco.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674816551/n0u6tgkexxr3fk4uvvgn.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674816557/qiqgfge0pl5eztrxuscd.webp\"]', '0', 'lksajksad', '\"<p>jhhjsd</p><p>jkhdfj</p>\"', 6667, 3998, 0, 1, '2023-01-27 10:49:30', '2023-01-29 03:28:05'),
(14, 'dffggdf456', 14, 9, 9, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1674987877/zubyqk1lkhug3aerrjd5.webp\"]', '0', 'dffggdf456', '\"<p>fdfggfd</p>\"', 43555, 3454, 455, 1, '2023-01-29 10:24:51', '2023-01-29 10:24:57'),
(15, 'demo may tinh', 18, 16, 13, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041936/d4c1amggsrip18bq8hy0.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041945/dljli7fw5mjxssd8ov3v.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041951/nymh4rezifled31ivzjo.webp\"]', '0', 'demo-may-tinh', '\"<p>jbdsad</p>\"', 98772, 234, 0, 1, '2023-01-30 01:25:54', '2023-01-30 01:25:54'),
(16, 'demo may tinh 2', 18, 16, 14, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675041976/hfba6th19kqeaaz5wssn.webp\"]', '0', 'demo-may-tinh-2', '\"<p>kjasdjds</p><p>kgsd</p>\"', 234, 242, 0, 1, '2023-01-30 01:26:21', '2023-01-30 01:26:21'),
(17, 'demo điện thoại', 17, 7, 12, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675042007/nq4s1nxfqaks0774tpon.webp\"]', '0', 'demo-đien-thoai', '\"<p>jhdsbdsgd</p>\"', 34, 13344, 0, 1, '2023-01-30 01:26:54', '2023-01-30 01:26:54'),
(18, 'demo điện thoại 2', 17, 19, 13, '[\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675042034/tmgdhtjxdwttb7rgfiml.webp\",\"https://res.cloudinary.com/duwusm1fm/image/upload/v1675042045/spm9akaqeqihpsuzchou.webp\"]', '0', 'demo-đien-thoai-2', '\"<p>dsagyugd</p><p>iugduy</p><p>dsah</p>\"', 244, 244434, 2146, 1, '2023-01-30 01:27:28', '2023-01-30 01:27:28');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-brand.js'),
('create-categories.js'),
('create-images.js'),
('create-opera.js'),
('create-order.js'),
('create-orderdetail.js'),
('create-product.js'),
('create-user.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `address` int DEFAULT NULL,
  `roles` int DEFAULT NULL,
  `status` int DEFAULT NULL,
  `avatar` longtext,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `phone`, `password`, `email`, `gender`, `address`, `roles`, `status`, `avatar`, `createdAt`, `updatedAt`) VALUES
('0fa75420-1a0d-4ada-892f-9a377c1d7d07', 'nguyen', 'van tèo', '02837474', '$2a$12$nhM96oqBSQQebBVPPE3P0.edMYmdf0RD8hWWIHIEP2YaVEgVNzWiK', 'teo1234@gmail.com', NULL, NULL, NULL, 0, NULL, '2023-01-17 01:28:59', '2023-01-17 01:28:59'),
('5c25db3d-dabe-49b0-81bf-cbcdb51779db', 'vo ', 'van c', '08763846', '$2a$12$jObPWTaIfzc3yP.nPbbqWOcCBjtJHJvCw3ntGJ.r1azEcuygo80T6', 'hh@gmail.com', NULL, NULL, 1, 1, NULL, '2023-01-17 01:32:18', '2023-01-27 05:45:14'),
('5f56a88b-f9d4-4cff-8e5f-0317ae4bd2f1', 'vo ', 'van d', '123456', '$2a$12$3TD4JYN9V4KMsUT5p9o1BuDKgBfpcVCRekbaNrYbya128I80UYD4e', 'd@gmail.com', NULL, NULL, 0, 1, NULL, '2023-01-17 01:37:43', '2023-01-17 10:41:23'),
('cd96d820-d541-4be0-babf-c4e18385af6a', 'nguyen', 'van b', '082834', '$2a$12$M.jzrcZz9rq0G28ny6PnVeS.OtC.LBSbSMO4TBe.qpdkA5PZCQyY2', 'b@gmail.com', NULL, NULL, 0, 0, NULL, '2023-01-17 01:29:27', '2023-01-17 01:29:27'),
('eaa0725c-0747-4902-bbc6-1a2ded2b08f5', 'Vo ', 'Nghia', '984746336', '$2a$12$zjcpUWAJEhDePQiZvrqSt.QcqVdFW8nN5NYaO/bnEj1SguuDw8Mdq', 'nghiakkk@gmail.com', NULL, NULL, 1, 1, NULL, '2023-01-15 01:21:17', '2023-01-15 01:21:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `operas`
--
ALTER TABLE `operas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `operas`
--
ALTER TABLE `operas`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
