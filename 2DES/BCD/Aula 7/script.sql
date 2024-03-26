CREATE DATABASE ofi;
USE ofi;

CREATE TABLE Veiculo (
    placa VARCHAR(20) PRIMARY KEY,
    modelo VARCHAR(50),
    marca VARCHAR(50),
    ano INT
);

CREATE TABLE Manutencao (
    id_Manutencao INT PRIMARY KEY,
    inicio_Manutencao DATE,
    fim_Manutencao DATE,
    descricao VARCHAR(255),
    placa VARCHAR(20),
    FOREIGN KEY (Placa) REFERENCES Veiculo(Placa)
);

CREATE TABLE Funcionario (
    matricula INT PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE Telefone (
    matricula INT,
    numero VARCHAR(20),
    PRIMARY KEY (Matricula, Numero),
    FOREIGN KEY (Matricula) REFERENCES Funcionario(Matricula)
);

DESCRIBE Manutencao;
DESCRIBE Funcionario;
DESCRIBE Veiculo;
DESCRIBE Telefone;
SHOW TABLES;