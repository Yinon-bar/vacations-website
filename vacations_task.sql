-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 02:39 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacations_task`
--
CREATE DATABASE IF NOT EXISTS `vacations_task` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `vacations_task`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_name`, `password`) VALUES
(1, 'yinon', 'bar', 'inonab', '053508384'),
(2, 'mali', 'ruham', 'malush', '1234'),
(3, 'yaron', 'veg', 'yar', '1234'),
(5, 'mali', 'ruham', 'malush', '1234'),
(12, 'dfghfdghdd6r5', 'fghkjfghkdfghfgdh', '5r6u56rudfghdfghdfgh', '12345654645h546'),
(13, 'undefined', 'undefined', '', '123456'),
(14, 'undefined', 'undefined', 'lkj', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `destenation` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `folowers` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `description`, `destenation`, `image`, `start_date`, `end_date`, `price`, `folowers`) VALUES
(1, 'miami vacation', 'miami', '', '28/01/2023', '05/02/2023', 2800, 4),
(6, 'hawai vacation', 'hawai', '', '05/02/2023', '15/02/2023', 6300, 16),
(7, 'Jerusalem - israel', 'come see Jerusalem in the mirror of time', '', '20/03/2023', '27/03/2023', 2500, 50),
(19, 'Moroco - dessert and sea', 'Marakesh', 'c16a8aec-0e98-4b14-8ad6-f5ea437ec757.jpg', '05/02/2023', '15/02/2023', 2100, 32);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
