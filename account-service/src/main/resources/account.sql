CREATE DATABASE account;
USE account;
CREATE TABLE account (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    password VARCHAR(70) NOT NULL,
    role VARCHAR(50) NOT NULL
);