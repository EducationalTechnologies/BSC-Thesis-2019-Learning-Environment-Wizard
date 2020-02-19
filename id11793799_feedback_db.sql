-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 19. Feb 2020 um 21:34
-- Server-Version: 10.3.16-MariaDB
-- PHP-Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `id11793799_feedback_db`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `feedback_db`
--

CREATE TABLE `feedback_db` (
  `location` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `task` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `collaboration` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `attributes` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `satisfaction` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `recommend` char(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `tipps` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `feedback_db`
--

INSERT INTO `feedback_db` (`location`, `time`, `task`, `collaboration`, `attributes`, `satisfaction`, `recommend`, `rating`, `tipps`) VALUES
('Zentralbibliothek', 'mittags', 'simpel', 'ja', '', 'ja', 'ja', 1, '\"\"'),
('Zentralbibliothek', 'vormittags', 'simpel', 'ja', '', 'nein', 'ja', 1, '\"\"'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'vormittags', 'simpel', 'ja', '', 'nein', 'ja', 1, '\"\"'),
('Zentralbibliothek', 'nachmittags', 'komplex', 'ja', 'laut,dunkel', 'ja', 'ja', 5, '\"\"'),
('Informatikbibliothek', 'mittags', 'simpel', 'ja', 'warm', 'ja', 'nein', 5, '\"\"'),
('Informatikbibliothek', 'mittags', 'simpel', 'ja', 'warm', 'nein', 'ja', 1, '\"\"'),
('Zentralbibliothek', 'mittags', 'simpel', 'ja', 'laut,dunkel,bunt', 'nein', 'ja', 2, '\"\"'),
('BSP (Bibliothek Sozialwissenschaften und Psychologie)', 'mittags', 'komplex', 'ja', 'dunkel,überfüllt', 'nein', 'ja', 1, '\"\"'),
('BNat (Bibliothek Naturwissenschaften)', 'nachmittags', 'komplex', 'ja', '', 'ja', 'ja', 5, '\"\"'),
('BSP (Bibliothek Sozialwissenschaften und Psychologie)', 'nachmittags', 'simpel', 'nein', '', 'ja', 'nein', 2, '\"morgens am leersten\"'),
('BSP (Bibliothek Sozialwissenschaften und Psychologie)', 'mittags', 'komplex', 'ja', '', 'nein', 'ja', 4, '\"nachmittags oft laut\"'),
('Bibliothek Kunstgeschichte/Städelbibliothek und Islamische Studien', 'vormittags', 'simpel', 'ja', '', 'nein', 'nein', 1, '\"\"'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'mittags', 'simpel', 'ja', '', 'nein', 'ja', 3, '\"\"'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'vormittags', 'simpel', 'nein', '', 'nein', 'ja', 3, '\"\"'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'mittags', 'komplex', 'ja', '', 'ja', 'ja', 5, '\"\"'),
('BSP (Bibliothek Sozialwissenschaften und Psychologie)', 'nachmittags', 'simpel', 'ja', '', 'ja', 'ja', 1, '\"\"'),
('Bibliothek Kunstgeschichte/Städelbibliothek und Islamische Studien', 'mittags', 'simpel', 'ja', '', 'ja', 'ja', 5, '\"\"'),
('Zentralbibliothek', 'vormittags', 'simpel', 'ja', 'blenden', 'nein', 'ja', 1, '\"\"'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'nachmittags', 'simpel', 'ja', '', 'ja', 'nein', 3, '\"super, um mit anderen dort zu lernen\"'),
('BSP (Bibliothek Sozialwissenschaften und Psychologie)', 'vormittags', 'simpel', 'ja', '', 'nein', 'nein', 1, '\"viel zu laut hier, am besten woanders lernen\"'),
('BzG (Bibliothekszentrum Geisteswissenschaften)', 'mittags', 'simpel', 'ja', '', 'nein', 'ja', 4, '\"im Sommer oft stickig, sonst okay\"'),
('Zentralbibliothek', 'vormittags', 'simpel', 'ja', '', 'ja', 'ja', 5, '\"eher ungünstig, hier in Gruppen zu lernen\"'),
('Bibliothek Kunstgeschichte/Städelbibliothek und Islamische Studien', 'nachmittags', 'komplex', 'nein', '', 'nein', 'ja', 5, '\"am besten morgens hingehen, wenn noch nicht so viele Leute da sind\"'),
('Mathematikbibliothek', 'mittags', 'komplex', 'ja', '', 'nein', 'ja', 3, '\"im Sommer viel zu stickig\"'),
('Informatikbibliothek', 'nachmittags', 'simpel', 'ja', 'blenden', 'ja', 'nein', 3, '\"leider keine Vorhänge an den Fenstern, sodass die Sonne blendet\"'),
('MedHB (Medizinische Hauptbibliothek)', 'mittags', 'komplex', 'ja', '', 'ja', 'ja', 5, '\"hat viele Steckdosen, also super, wenn man am Laptop arbeiten will\"'),
('BNat (Bibliothek Naturwissenschaften)', 'nachmittags', 'komplex', 'ja', '', 'ja', 'nein', 1, '\"die Toiletten sind schwer zu finden, sie sind im Nebengebäude\"'),
('Bibliothek Kunstgeschichte/Städelbibliothek und Islamische Studien', 'nachmittags', 'simpel', 'ja', '', 'nein', 'ja', 4, '\"manchmal etwas kalt im Winter, also zieht euch warm an!\"'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'vormittags', 'komplex', 'nein', 'überfüllt', 'ja', 'ja', 5, '\"Früh morgens gibt es immer Platz!\"'),
('BzG (Bibliothekszentrum Geisteswissenschaften)', 'mittags', 'komplex', 'nein', 'stickig,warm', 'ja', 'ja', 3, '\"\"'),
('Zentralbibliothek', 'mittags', 'simpel', 'ja', '', 'nein', 'ja', 5, '\"\"');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `locations_db`
--

CREATE TABLE `locations_db` (
  `location_name` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `opening_hours` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `tables` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `food_allowed` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `food_offered` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `restrooms` char(10) COLLATE utf8_unicode_ci NOT NULL,
  `tech` char(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `campus` char(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `locations_db`
--

INSERT INTO `locations_db` (`location_name`, `address`, `opening_hours`, `tables`, `food_allowed`, `food_offered`, `restrooms`, `tech`, `campus`) VALUES
('MedHB (Medizinische Hauptbibliothek)', 'Theodor-Stern-Kai 7, Haus 10', 'Mo-Fr 9-22 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Niederrad'),
('BNat (Bibliothek Naturwissenschaften)', 'Otto-Stern-Zentrum, Ruth-Moufang-Str. 2', 'Mo-Fr 8-20 Uhr, Sa 10-16 Uhr', 'ja', 'nein', 'nein', 'ja', 'PCs, WLAN, Kopierer, Gruppenarbeitsräume', 'Riedberg'),
('Bibliothek für Sportwissenschaften', 'Ginnheimer Landstraße 39', 'Mo-Fr 10-16 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Ginnheim'),
('BRuW (Bibliothek für Recht und Wirtschaft)', 'Theodor-W.-Adorno-Platz 4', 'Mo-Fr 8-22 Uhr, Sa/So 10-22 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Westend'),
('BSP (Bibliothek Sozialwissenschaften und Psychologie)', 'Theodor-W.-Adorno-Platz 6', 'Mo-Fr 8-22 Uhr, Sa 10-18 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Westend'),
('BzG (Bibliothekszentrum Geisteswissenschaften)', 'Norbert-Wollheim-Platz 1, IG-Farbenhaus (Q1 und Q6)', 'Mo-Fr 8-22 Uhr, Sa 10-18 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Westend'),
('Zentralbibliothek', 'Bockenheimer Landstraße 134-138', 'Mo-Fr 8-21:30 Uhr, Sa/So 10-18 Uhr', 'ja', 'nein', 'nein', 'ja', 'PCs', 'Bockenheim'),
('Bibliothek Kunstgeschichte/Städelbibliothek und Islamische Studien', 'Senckenberganlage 31', 'Mo-Do 10-20 uhr, Fr 10-17 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Bockenheim'),
('Mathematikbibliothek', 'Robert-Mayer-Straße 8', 'Mo-Fr 9-17 Uhr', 'ja', 'nein', 'nein', 'ja', '', 'Bockenheim'),
('Informatikbibliothek', 'Robert-Mayer-Straße 11-15', 'Mo-Fr 9-18 Uhr (Vorlesungszeit), Mo-Fr 11-16:45 Uhr (vorlesungsfreie Zeit)', 'ja', 'nein', 'nein', 'ja', '', 'Bockenheim');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `users_db`
--

CREATE TABLE `users_db` (
  `id` int(255) NOT NULL,
  `username` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` char(255) COLLATE utf8_unicode_ci NOT NULL,
  `preference` char(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `users_db`
--

INSERT INTO `users_db` (`id`, `username`, `password`, `preference`) VALUES
(24, 'admin', '$2y$10$TFWGZvrOhdqUPf4gA640lu44tIiQvbjf37PW2YDV.GbGEqacb.7Hq', NULL);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `users_db`
--
ALTER TABLE `users_db`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `users_db`
--
ALTER TABLE `users_db`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
