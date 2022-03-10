-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 09 mars 2022 à 17:37
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `arborie`
--

-- --------------------------------------------------------

--
-- Structure de la table `animals`
--

DROP TABLE IF EXISTS `animals`;
CREATE TABLE IF NOT EXISTS `animals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `family` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trees_associed` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_2` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_3` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_4` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `animals`
--

INSERT INTO `animals` (`id`, `name`, `family`, `trees_associed`, `description`, `image`, `image_2`, `image_3`, `image_4`) VALUES
(2, 'Mésange charbonnière', 'amille des Paridés', NULL, '<div>La <strong>Mésange charbonnière</strong> (Parus major) est une espèce de passereaux de la famille des paridés. Cette <strong>mésange</strong>, la plus commune et la plus grande des <strong>mésanges</strong> eurasiatiques, est facilement identifiable grâce à sa calotte et à sa cravate noires et à son plumage où le jaune domine. Le dimorphisme sexuel est peu marqué.</div>', 'Kohlmeise073b_0.jpg', 'mesange.charbonniere.mafa.26g.jpg', 'mesange-charbonniere-094012.jpg', NULL),
(3, 'Mésange charbonnièrea', 'amille des Paridés', 'azedsfdgb', '<div>redzx</div>', 'Kohlmeise073b_0.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220308122739', '2022-03-08 12:27:43', 42),
('DoctrineMigrations\\Version20220308125006', '2022-03-08 12:50:10', 70),
('DoctrineMigrations\\Version20220309111626', '2022-03-09 11:16:33', 58),
('DoctrineMigrations\\Version20220309112744', '2022-03-09 11:27:49', 23),
('DoctrineMigrations\\Version20220309113856', '2022-03-09 11:39:00', 27),
('DoctrineMigrations\\Version20220309114131', '2022-03-09 11:41:34', 69);

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

DROP TABLE IF EXISTS `publication`;
CREATE TABLE IF NOT EXISTS `publication` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `trails`
--

DROP TABLE IF EXISTS `trails`;
CREATE TABLE IF NOT EXISTS `trails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `trees`
--

DROP TABLE IF EXISTS `trees`;
CREATE TABLE IF NOT EXISTS `trees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `planting_year` int(11) DEFAULT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_2` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_3` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_4` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `trees`
--

INSERT INTO `trees` (`id`, `name`, `description`, `planting_year`, `image`, `image_2`, `image_3`, `image_4`) VALUES
(1, 'erable', 'Les érables sont des arbres et des arbustes du genre Acer, type de la famille des Sapindacées selon la classification APG III (autrefois, selon la classification de Cronquist, de celle des Acéracées), dans l\'ordre des Sapindales. Une acéraie ou érablaie est un peuplement forestier dominé par les érables.', 1850, 'erable-japon-automne.jpg', 'erable.jpg', NULL, NULL),
(2, 'sapin', 'Un sapin de Noël est un arbre décoré pour Noël. Héritier des célébrations païennes de Yule, la fête du solstice d\'hiver, et de plusieurs croyances de la mythologie nordique, ce sapin est associé par les chrétiens à la Nativité du Christ depuis le Moyen Âge.', 823, 'bien-choisir-son-sapin-de-noel-jpg5c1a587341b38500019a54a7.jpg', '10557689.jpg', 'sapin.png', NULL),
(3, 'buisson', 'grand buisson', 705, 'buisson.jpg', 'téléchargement.jpg', '10557689.jpg', 'sapin.png'),
(4, 'ooo', 'ooooooooo', 1, '1136_arbre.jpg', 'téléchargement.jpg', NULL, NULL),
(5, 'Saule pleureur', '<div>Le saule pleureur est une espèce d\'arbre de la famille des Salicaceae. Son port retombant est caractéristique et en fait une espèce très appréciée comme arbre d\'ornement notamment au bord des pièces d\'eau. Ses longues branches-lianes pendantes sont la cause de son appellation de « pleureur ».</div><div><br></div>', 896, 'shutterstock_212263402.jpg', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `firstname`, `lastname`) VALUES
(1, 'test@test.fr', '[]', '$2y$13$swRZGV0DBgNdT9kBpCEUwu4MqfOCjCuC3wA5NVnwFqmi7l2rTF7X.', 'test', 'test'),
(2, 'admin@test.fr', '[]', '$2y$13$Pur46kw0wn2otMj.g4u5xOuoykh5GZvWv.KawOqb32hbGdx05eJOK', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
