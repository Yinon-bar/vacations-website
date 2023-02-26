-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2023 at 06:23 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

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
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(254) NOT NULL,
  `user_id` int(255) NOT NULL,
  `vacation_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `vacation_id`) VALUES
(539, 1, 25),
(540, 1, 19);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `user_name`, `password`, `role`) VALUES
(1, 'yinon', 'bar', 'inonab', '053508384', ''),
(2, 'mali', 'ruham', 'malush', '1234', ''),
(3, 'yaron', 'veg', 'yar', '1234', ''),
(16, 'Ugi', 'fletset', 'ugi', '123456', '1'),
(17, 'Mali', 'Ruham bar', 'malca', '123456', '1'),
(18, 'Yaron', 'veg', 'yaron', '123456', '1');

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
(7, 'Jerusalem in the mirror of time', 'Jerusalem - israel', '', '20/03/2023', '27/03/2023', 2500, 50),
(19, 'Moroco - dessert and sea', 'Marakesh', 'c16a8aec-0e98-4b14-8ad6-f5ea437ec757.jpg', '05/02/2023', '15/02/2023', 2100, 32),
(25, 'Hawaii', 'Hawaii, U.S.A', 'b47dfefb-8c14-408e-896a-a0e0933af6b6.jpg', '05/02/2023', '15/02/2023', 2100, 0),
(30, 'A night wallk on the ancient walls ', 'Jerusalem, Israel', 'ac02574e-5441-4516-b47a-4adae6ea5721.jpg', '2023-03-07', '2023-03-07', 500, 0),
(31, 'Paris from retrospective', 'Paris, France', '4385f519-728b-49db-a2ed-a38777382216.jpg', '2023-07-12', '2023-07-18', 3650, 0),
(32, 'An urban city tour', 'London ,UK', '7ab788e9-6286-4c32-8a4c-b1e0bfa2d1b3.jpg', '2023-08-15', '2023-08-21', 5250, 0),
(33, 'Follow Gaudi - past to future', 'Barcelona, Spain', '4ee6b173-8181-456f-8c84-5ab1090a3c87.jpg', '2023-02-20', '2023-02-27', 4200, 0),
(34, 'Prague - Till kingdom come', 'Czech Republic', '491c885d-36b2-45eb-bf12-da3dfccee811.jpg', '05/02/2023', '15/02/2023', 7500, 0),
(35, 'Cyprus - A walk to remember', 'Larnaka, Cyprus', 'ad65bfb3-632a-4221-aebb-0435d13acdb3.jpg', '2022-12-28', '2023-12-30', 1600, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `vacation_id` (`vacation_id`);

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
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(254) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=541;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `vacations`
--
ALTER TABLE `vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
