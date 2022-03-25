-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 25 mars 2022 à 12:50
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `animals`
--

INSERT INTO `animals` (`id`, `name`, `family`, `trees_associed`, `description`, `image`, `image_2`, `image_3`, `image_4`) VALUES
(5, 'Mésanges bleue', 'famille', NULL, '<div>C’est la plus acrobate des trois mésanges présentées, qui n’hésite pas à s’accrocher tête en bas pour trouver des insectes en bout de branche. Son plumage bleu est des plus intense juste après une mue.&nbsp;</div>', 'Mésange bleue.jpg', NULL, NULL, NULL),
(6, 'Pinson des arbres', 'famille', NULL, '<div>Très rarement solitaire, le pinson des arbres porte assez bien son nom, bien qu’on puisse le trouver aussi à terre. Le mâle est un grand chanteur, arborant un plumage brun rouille sur le ventre et une calotte (dessus de la tête) grise. &nbsp;</div>', 'Pinson des arbres F.jpg', 'Pinson des arbres M.JPG', NULL, NULL),
(7, 'Merle noir', 'famille', NULL, '<div>Le merle noir adore fouiller le sol et les feuilles mortes en quête de nourriture. Sa queue très souvent relevée l’habille d’une attitude volontaire, qui donne à ce gros passereau, discret dans les couleurs, une certaine allure lui permettant d’attirer l’œil. &nbsp;</div>', 'Merle noir M.jpg', 'Merle noir F.jpg', NULL, NULL),
(8, 'Pic vert', 'famille', NULL, '<div>Ce pic aime passer du temps au sol. Mais pour espérer l’apercevoir à terre, il faudra être particulièrement discret et attentif, car c’est un oiseau extrêmement craintif avec un plumage vert adapté au camouflage dans l’herbe. &nbsp;</div>', 'Pic vert.jpg', NULL, NULL, NULL),
(9, 'Pic épeiche', 'famille', NULL, '<div>Au contraire du premier, ce pic adore rester au sommet des arbres, bien camouflé dans le feuillage et toujours du mauvais côté, pour être bien observé, de la branche sur laquelle il se tient.&nbsp;</div>', 'Pic épeiche M.jpg', NULL, NULL, NULL),
(10, 'Pigeons biset', 'famille', NULL, '<div>La palette de plumage pour le pigeon biset est extrêmement variée et peut parfaitement aller du gris foncé au blanc, avec une multitude de nuances.&nbsp;</div>', 'Pigeon biset.jpg', NULL, NULL, NULL),
(11, 'Bergeronnette grise', 'famille', NULL, '<div>Comme toute les bergeronnettes, on la repère assez facilement de par sa forte tendance à hocher sa longue queue. Elle est aussi à l’aise sur un toit qu’à terre. &nbsp;</div>', 'Bergeronnette grise.jpg', NULL, NULL, NULL),
(12, 'Rougegorge familier', 'Lorem ipsum', NULL, '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur.</div>', 'bird.png', NULL, NULL, NULL),
(13, 'Etourneau sansonnet', 'Lorem ipsum', NULL, '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur</div>', 'bird.png', NULL, NULL, NULL),
(14, 'Geai des chênes', 'Lorem ipsum', NULL, '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur</div>', 'bird.png', NULL, NULL, NULL),
(15, 'Pie bavarde', 'Lorem ipsum', NULL, '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur</div>', 'bird.png', NULL, NULL, NULL),
(16, 'Mésange charbonnière', 'famille des Paridés', NULL, '<div>La plus grosse des mésanges, qui revêt sur sa poitrine une longue barre noire allant de la gorge à la queue. Si cette barre est large, vous avez probablement affaire à un mâle. Si elle est toute fine, ce sera plutôt une femelle. Il faut aussi noter son chant entrainant, avec des airs de musique samba.</div>', 'Mésange charbonnière.jpg', 'Mésange_charbonnière_2.jpg', 'Mésange charbonnière_3.jpg', NULL);

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `trees`
--

INSERT INTO `trees` (`id`, `name`, `description`, `planting_year`, `image`, `image_2`, `image_3`, `image_4`) VALUES
(1, 'Erable', '<div>Les érables sont des arbres et des arbustes du genre Acer, type de la famille des Sapindacées selon la classification APG III (autrefois, selon la classification de Cronquist, de celle des Acéracées), dans l\'ordre des Sapindales. Une acéraie ou érablaie est un peuplement forestier dominé par les érables.</div>', 200, 'erable-japon-automne.jpg', 'erable.jpg', NULL, NULL),
(6, 'Des chênes différents', '<div>Regardes bien autour de toi, ton ami le Chêne est partout! C’est l’arbre le plus présent sur le campus. Le nom scientifique s’écrit en Latin, celui du Chêne est Quercus. Et oui la mascotte du sentier est bien un Chêne ! Observes les feuilles, bizarre... ces arbres ont deux feuilles différentes, il y a donc deux types de chênes ici. Voici un petit jeu accessible à tous pour différencier le Chêne pédonculé et le Chêne des marais. Ensuite, je te défis de retrouver leurs feuilles !</div>', NULL, '1136_arbre.jpg', NULL, NULL, NULL),
(7, 'Lorem ipsum', '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur leo.&nbsp;</div>', 200, '1136_arbre.jpg', NULL, NULL, NULL),
(8, 'Lorem ipsum', '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur leo.&nbsp;</div>', 200, '1136_arbre.jpg', NULL, NULL, NULL),
(9, 'La vie dans les arbres morts', '<div>Le Lucane cerf-volant :&nbsp;<br>- Je suis un insecte de type Coléoptère car mes ailes sont protégées par une dure<br>carapace. Je peux faire la taille de ton pouce.<br>- Je tire mon nom des mes grosses mandibules . Elles me servent lors de combat de lutte<br>contre les autres mâles pour séduire les femelles.<br>- Ma larve vit cachée dans la terre ou dans un tronc en décomposition. Au bout de 5 ans elle<br>se métamorphosera en adulte.<br><br>Le Grand Capricorne :<br>- Avec mes antennes plus grandes que mon corps je peux mesurer jusqu’à 6 cm.&nbsp;<br>- Je passe la plus grande partie de ma vie sous forme de larve, je me nourris de bois, surtout celui des vieux chênes. Je laisse de grosses galeries derrière moi.<br>- Je ne vis qu\'un mois sous ma forme adulte. Pendant cette période je peux voler et me reproduire.<br>- Si tu me dérange, je ferais un bruit en frottant ma carapace.&nbsp;<br><br>Le gite et le couvert pour les animaux des forêts :<br>- Les trous à l\'intérieur du tronc intéressent oiseaux et mammifères. Ils peuvent servir d\'abris pour passer la nuit ou de nid pour les petits. Les écureuils et les loirs passent l\'hiver au chaud dans ces trous aménagés. Les chouettes habitent aussi dans ces cavitées.<br>- Les oiseaux comme les Pics et les mésanges se régalent des larves et insectes cachés dans le bois.<br>- Les arbres morts sont essentiels à la vie de nombreuses espèces animales.<br>- Ouvre l\'œil, il y a sûrement un animal tout près !&nbsp;</div>', NULL, '8.jpg', '9.jpg', '10.jpg', '11.jpg'),
(10, 'Un chêne majestueux', '<div>Lèves les yeux ! Quel âge a ce magnifique Chêne selon toi ?</div>', NULL, '1136_arbre.jpg', NULL, NULL, NULL),
(11, 'Le lierre', '<div>Observez les arbres autour de vous, une plante grimpe le long de leur tronc, c’est le Lierre !<br>Le Lierre couvre le tronc de l’arbre, il ne luis fait pas mal. Il lui permet même d’être au frais l’été et au chaud l’hiver. Il est l’abri de petit animaux comme des lézards et des insectes !&nbsp;<br>Ses feuilles tombent tous les 3-4 ans, elles permettent de nourrir les sols.<br>Il crée aussi un poids en plus sur les branches qui risquent de casser si l’arbre est déjà fragile.<br>La solution est donc d’empêcher qu’il grandissent trop en le taillant de temps en temps.&nbsp;<br>Le lierre ne prend pas son énergie dans l’arbre sur lequel il grimpe. Il s’en sert juste pour monter et atteindre la lumière. Lorsque le Lierre arrive tout en haut de l’arbre, il lui fait concurrence pour la lumière.&nbsp;</div>', NULL, '12.jpg', '13.jpg', NULL, NULL),
(12, 'Lorem ipsum', '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales molestie sem, vel varius quam auctor nec. Vivamus lacinia enim eget est pharetra dignissim. Curabitur pharetra eget lorem sit amet dictum. Maecenas sem sem, pretium scelerisque libero quis, consectetur tempor leo. Vivamus id tellus lectus. Curabitur vehicula purus varius tellus facilisis elementum. Duis lacinia mauris lorem, sed sollicitudin nunc suscipit id. Pellentesque vel lobortis enim. Suspendisse congue sodales maximus. Sed odio lectus, interdum vitae tellus sed, tempus condimentum nunc. Donec at magna ac orci mollis ultricies sit amet a libero. Praesent non tortor sit amet quam aliquam ultricies. Morbi non odio in metus vehicula gravida ut a ante. Nunc sit amet efficitur leo.&nbsp;</div>', 200, '1136_arbre.jpg', NULL, NULL, NULL),
(13, 'Le Séquoia géant', '<div>Bonjour ! Je suis le Séquoia géant et je fais partie de la famille des conifères. Cela veut dire que mes fruits sont en forme de cône.<br>En plus, mes feuilles sont des aiguilles persistantes ! Je les garde donc tout le long de l\'année même en hiver ! D\'ailleurs si tu les frottes dans tes mains tu peux sentir une odeur d\'anis.<br>Concernant ma taille je peux mesurer 85 mètres de haut et 8 mètres de large. Mais pour l\'instant je fais 25 mètres de haut, je suis encore jeune j\'ai tout mon temps pour pousser. En effet j\'ai des grands-parents qui ont plus de 1000 ans !<br>Je vais te révéler un petit secret. Je fabrique une substance qui me permet de lutter contre un de mes plus grand ennemis le feu ! Et c\'est grâce à cette substance que mon bois à l\'intérieur est rouge !&nbsp;</div>', 200, '19.jpg', '20.jpg', '21.jpg', NULL),
(14, 'Le fameux Hêtre', '<div>Je suis plutôt un arbre de montagne, j’aime l’ombre et l’humidité.<br>Je suis très imposant : je peux mesurer jusqu’à 40 mètres de haut et mon tronc peut faire jusqu’à 2 mètres de diamètre !<br>Touches mon écorce, comment la trouves-tu ?<br>Regardes autour de toi, essayes de trouver mes fruits, ce sont des faînes. Autrefois on en faisait de l’huile.<br>Mes feuilles sont légèrement ondulées et poilues. Retrouves-les en t’aidant de la photo.&nbsp;</div>', 200, '22.jpg', '23.jpg', NULL, NULL),
(15, 'Le Charme', '<div>J’aime les régions tempérées, je me plais beaucoup en Europe. Je peux mesurer jusqu’à 25 m de haut.<br>On m’appelle aussi Charmille lorsque je suis taillé dans des allées.<br>Mes feuilles ont des petites dents sur les bords. Essayes d\'en trouver une !<br>Je suis souvent utilisé comme arbre d’ornement et je fais un très bon bois de chauffage. J’ai un bois blanc et très dense.<br>Malheureusement je ne vis pas très longtemps, un peu moins de 100 ans.<br>Tu peux observer des trous sur les charmes devant toi, amusant non ?&nbsp;</div>', 90, '24.jpg', NULL, NULL, NULL),
(16, 'Le Platane', '<div>On me reconnait grâce à mon écorce, regardes on dirait que j’ai des écailles !<br>Je peux vivre plus de 500 ans et mesurer jusqu’à 55 m de haut. Certains platanes vivent même plusieurs siècles !<br>Je suis souvent utilisé en alignement en bord de route ou sur les places.<br>Mes fruits sont des boules pendantes et mes feuilles sont grandes, aussi larges que longues.<br>Un ouvrage arabe raconte qu’on pouvait utiliser ma feuille comme pansement.<br>Tu peux trouver une feuille en t\'aidant de l\'image et la comparer à celle du Charme. Tu pourras voir la différence de taille !&nbsp;</div>', 500, '25.jpg', '26.jpg', NULL, NULL),
(17, 'Le Peuplier', '<div>Nous sommes deux peupliers.<br>On adore les sols frais et humides, on est souvent près des cours d\'eau.<br>On aime beaucoup le soleil, on est donc une plante héliophile. On grandit très vite, on peut faire plus de 20 mètres dès 15 ans.<br>Mon bois est très apprécié car il est clair et léger, on l\'utilise pour faire de petites boites et des meubles.<br>Je suis une espèce dioïque, c’est-à-dire qu\'on est soit mâle, soit femelle.<br>Mes fleurs sont appelées chatons et sont remplies de pollen.&nbsp;</div>', 200, '27.jpg', NULL, NULL, NULL),
(18, 'Cadeaux de la nature', '<div>La nature a plein de trésors à nous offrir ! Cherches ces merveilles en fonction des saisons.&nbsp;</div>', NULL, '38.jpg', '35.jpg', '34.jpg', '31.jpg');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `firstname`, `lastname`) VALUES
(4, 'admin@admin.fr', '[]', '$2y$13$d9TR/wcOV29zAirJ/.vGb.bY7aH0F7t7iha9TVlc/b1ST8BNcBUuK', 'Admin', 'Admin');

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
