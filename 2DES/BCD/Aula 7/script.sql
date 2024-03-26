drop databse if exits sql
create database sql
use sql

CREATE TABLE Manutencao (
    id_manutencao INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    inicio_manutencao date(100) NOT NULL,
    fim_manutencao date(50) NOT NULL,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE Funcionario (
    matricula INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    telefone  VARCHAR(20) NOT NULL,
    FOREIGN KEY (telefone) REFERENCES Telefone(telefone)
);

CREATE TABLE Telefone (
    telefone VARCHAR(20) NOT NULL PRIMARY KEY
);

CREATE TABLE Veiculo (
    placa INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(20) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    ano date(100) NOT NULL,
    id_manutencao INT,
    matricula VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_manutencao) REFERENCES Manutencao(id_manutencao),
    FOREIGN KEY (matricula) REFERENCES Funcionario(matricula)
);


DESCRIBE Manutencao;
DESCRIBE Funcionario;
DESCRIBE Veiculo;
DESCRIBE Telefone;
SHOW TABLES;