-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 10.26.45.39    Database: dbpet
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Adocao`
--

DROP TABLE IF EXISTS `Adocao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Adocao` (
  `id_adocao` int NOT NULL AUTO_INCREMENT,
  `data_adocao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_pet` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_adocao`),
  KEY `fk_adocao_pk_pet_idx` (`id_pet`),
  KEY `fk_adocao_pk_usuario_idx` (`id_usuario`),
  CONSTRAINT `fk_adocao_pk_pet` FOREIGN KEY (`id_pet`) REFERENCES `Pet` (`id_pet`),
  CONSTRAINT `fk_adocao_pk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Adocao`
--

LOCK TABLES `Adocao` WRITE;
/*!40000 ALTER TABLE `Adocao` DISABLE KEYS */;
INSERT INTO `Adocao` VALUES (1,'2025-07-03 00:00:00',1,6);
/*!40000 ALTER TABLE `Adocao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Conexao`
--

DROP TABLE IF EXISTS `Conexao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Conexao` (
  `id_conexao` int NOT NULL AUTO_INCREMENT,
  `rede_social1` varchar(50) DEFAULT NULL,
  `rede_social2` varchar(50) DEFAULT NULL,
  `rede_social3` varchar(50) DEFAULT NULL,
  `rede_social4` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_conexao`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Conexao`
--

LOCK TABLES `Conexao` WRITE;
/*!40000 ALTER TABLE `Conexao` DISABLE KEYS */;
INSERT INTO `Conexao` VALUES (1,'facebook.com/ong','instagram.com/ong',NULL,NULL);
/*!40000 ALTER TABLE `Conexao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contato`
--

DROP TABLE IF EXISTS `Contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contato` (
  `id_contato` int NOT NULL AUTO_INCREMENT,
  `telefone_residencial` varchar(15) DEFAULT NULL,
  `telefone_comercial` varchar(15) DEFAULT NULL,
  `telefone_celular` varchar(15) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id_contato`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contato`
--

LOCK TABLES `Contato` WRITE;
/*!40000 ALTER TABLE `Contato` DISABLE KEYS */;
INSERT INTO `Contato` VALUES (1,'1122334455','1133445566','11999887766','exemplo@teste.com'),(2,NULL,'1133445566','11999887766','ong@email.com');
/*!40000 ALTER TABLE `Contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Endereco`
--

DROP TABLE IF EXISTS `Endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Endereco` (
  `id_endereco` int NOT NULL AUTO_INCREMENT,
  `complemento` varchar(255) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `bairro` varchar(30) NOT NULL,
  `cidade` varchar(30) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `logradouro` varchar(50) NOT NULL,
  `numero` varchar(5) NOT NULL,
  PRIMARY KEY (`id_endereco`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Endereco`
--

LOCK TABLES `Endereco` WRITE;
/*!40000 ALTER TABLE `Endereco` DISABLE KEYS */;
INSERT INTO `Endereco` VALUES (1,'Casa','12345-678','Centro','CidadeX','SP','Rua Y','10'),(2,'Sala 101','12345-678','Centro','São Paulo','SP','Av. das ONGs','100');
/*!40000 ALTER TABLE `Endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pet`
--

DROP TABLE IF EXISTS `Pet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pet` (
  `id_pet` int NOT NULL AUTO_INCREMENT,
  `id_ong` int NOT NULL,
  `nome_pet` varchar(50) NOT NULL,
  `idade` varchar(10) DEFAULT NULL,
  `especie` varchar(30) DEFAULT NULL,
  `raca` varchar(50) DEFAULT NULL,
  `sexo` enum('M','F') DEFAULT 'M',
  `porte` enum('pequeno','médio','grande') DEFAULT NULL,
  `cor` varchar(30) DEFAULT NULL,
  `comportamento` varchar(100) DEFAULT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `foto_pet1` varchar(255) DEFAULT NULL,
  `foto_pet2` varchar(255) DEFAULT NULL,
  `foto_pet3` varchar(255) DEFAULT NULL,
  `disponibilidade` varchar(200) DEFAULT '1',
  PRIMARY KEY (`id_pet`),
  KEY `fk_pet_pk_ong_idx` (`id_ong`),
  CONSTRAINT `fk_pet_pk_ong` FOREIGN KEY (`id_ong`) REFERENCES `Usuario_ong` (`id_ong`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pet`
--

LOCK TABLES `Pet` WRITE;
/*!40000 ALTER TABLE `Pet` DISABLE KEYS */;
INSERT INTO `Pet` VALUES (1,1,'Rex','2 anos','Cachorro','Vira-lata','M','médio','Marrom','Brincalhão','Cachorro dócil e muito amigável','rex1.jpg',NULL,NULL,'1'),(2,1,'Loli','Filhote','Cachorro','Vira-lata','F','pequeno','Caramelo','Calmo','Cachorro muito amigável','loli1.jpg',NULL,NULL,'1'),(3,1,'Luis','20','Cachorro','Dobberman','F','pequeno','Azul','Calmo','Cão calmo',NULL,NULL,NULL,'1');
/*!40000 ALTER TABLE `Pet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Preferencia`
--

DROP TABLE IF EXISTS `Preferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Preferencia` (
  `id_preferencia` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `tipo_pet` varchar(45) NOT NULL,
  `idade_pet` varchar(45) NOT NULL,
  `porte` varchar(45) NOT NULL,
  `comportamento` varchar(45) NOT NULL,
  `nivel_energia` varchar(45) NOT NULL,
  PRIMARY KEY (`id_preferencia`),
  KEY `fk_preferencia_pk_usuario_idx` (`id_usuario`),
  CONSTRAINT `fk_preferencia_pk_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `Usuario` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Preferencia`
--

LOCK TABLES `Preferencia` WRITE;
/*!40000 ALTER TABLE `Preferencia` DISABLE KEYS */;
INSERT INTO `Preferencia` VALUES (37,6,'Cachorro','Filhote','Pequeno ','Calmo','Tranquilo');
/*!40000 ALTER TABLE `Preferencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome_usu` varchar(50) NOT NULL,
  `contato` int NOT NULL,
  `cpf_usu` varchar(15) NOT NULL,
  `data_nascimento` date NOT NULL,
  `tipo_usu` varchar(30) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  `id_endereco` int NOT NULL,
  `foto_usu` varchar(255) DEFAULT NULL,
  `preferencia` int DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `cpf_usu` (`cpf_usu`),
  KEY `fk_usuario_pk_endereco_idx` (`id_endereco`),
  KEY `fk_usuario_pk_contato_idx` (`contato`),
  KEY `fk_usuario_pk_preferencia_idx` (`preferencia`),
  CONSTRAINT `fk_usuario_pk_contato` FOREIGN KEY (`contato`) REFERENCES `Contato` (`id_contato`),
  CONSTRAINT `fk_usuario_pk_endereco` FOREIGN KEY (`id_endereco`) REFERENCES `Endereco` (`id_endereco`),
  CONSTRAINT `fk_usuario_pk_preferencia` FOREIGN KEY (`preferencia`) REFERENCES `Preferencia` (`id_preferencia`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (6,'Carlos Silva',1,'12345678901','1990-04-20','comum','senha123',1,'foto.jpg',37),(7,'Luis',1,'258.789.684-60','1990-04-20',NULL,'$2b$12$YqTgMnkhvSmVi81K/C.C.Odb0Mqllai0kAbP2jxoqoNItadU58hAm',1,NULL,37);
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario_ong`
--

DROP TABLE IF EXISTS `Usuario_ong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuario_ong` (
  `id_ong` int NOT NULL AUTO_INCREMENT,
  `nome_ong` varchar(50) NOT NULL,
  `contato` int NOT NULL,
  `id_endereco` int NOT NULL,
  `cnpj_ong` varchar(20) NOT NULL,
  `razao_social` varchar(100) NOT NULL,
  `nome_fantasia` varchar(100) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `conexao` int NOT NULL,
  `doc_comprovacao` varchar(255) NOT NULL,
  `foto_ong` varchar(255) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id_ong`),
  UNIQUE KEY `cnpj_ong` (`cnpj_ong`),
  KEY `fk_ong_pk_contato_idx` (`contato`),
  KEY `fk_ong_pk_endereco_idx` (`id_endereco`),
  KEY `fk_ong_pk_conexao_idx` (`conexao`),
  CONSTRAINT `fk_ong_pk_conexao` FOREIGN KEY (`conexao`) REFERENCES `Conexao` (`id_conexao`),
  CONSTRAINT `fk_ong_pk_contato` FOREIGN KEY (`contato`) REFERENCES `Contato` (`id_contato`),
  CONSTRAINT `fk_ong_pk_endereco` FOREIGN KEY (`id_endereco`) REFERENCES `Endereco` (`id_endereco`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario_ong`
--

LOCK TABLES `Usuario_ong` WRITE;
/*!40000 ALTER TABLE `Usuario_ong` DISABLE KEYS */;
INSERT INTO `Usuario_ong` VALUES (1,'Associação Patas Unidas',2,2,'12.345.678/0001-99','Associação de Proteção Animal','Patas Unidas','ONG focada em resgate e adoção de animais abandonados.',1,'documento.pdf','foto_ong.jpg',''),(4,'Bicho solto',1,1,'123546492','Helena Perfumes ltda','Bicho Solto','Ong que ajuda bixins',1,'Comprovado',NULL,'$2b$12$pMgNolbUbESAugEqnU6SnuFaAWrorkDKaziYxJ93I2BFNEEjiv99e');
/*!40000 ALTER TABLE `Usuario_ong` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-08 15:28:01
