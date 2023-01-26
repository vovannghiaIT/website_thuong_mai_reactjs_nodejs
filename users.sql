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
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `roles` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `avatar` longblob DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `phone`, `password`, `email`, `gender`, `roles`, `status`, `avatar`, `createdAt`, `updatedAt`) VALUES
('a6831112-5959-4a14-8228-9e8e86a47c89', 'Võ ', 'nghia', '12345678', '$2a$12$5irnCR.y4lwI3Gkl5Grmfewgdq2eeot0v3MPp8m5f04mG7sRGhSFa', 'nghiakkk@gmail.com', NULL, 1, NULL, NULL, '2023-01-02 06:50:53', '2023-01-02 06:50:53'),
('f4d96bd4-7d1f-4864-adec-f5696e42ecec', 'Võ ', 'Văn Nghĩa', '09742577867', '$2a$12$BSSPWL1JEr5cb5cLaGHTQ.24xqGRw3QiOr/sD/CQk0pUCXjZ6.M1u', 'nghiakkk2@gmail.com', NULL, 0, NULL, NULL, '2023-01-04 01:47:05', '2023-01-04 01:47:05');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
