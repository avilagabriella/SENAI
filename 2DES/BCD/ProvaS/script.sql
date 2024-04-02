DROP DATABASE IF EXISTS alugue;
CREATE DATABASE alugue CHARSET=UTF8 COLLATE utf8_general_ci;
USE alugue;

-- DDL Criação da estrutura do Banco de dados
CREATE TABLE Cliente(
    cpf_cliente varchar(10) not null primary key,
    nome_cliente varchar(50) not null,
    telefone varchar(20) not null
);


CREATE TABLE Veiculo(
    id_placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    diaria int not null
);

CREATE TABLE Telefone(
    numero int(10) not null,
    reserva varchar(30) not null
);
CREATE TABLE Alugueis(
    reserva varchar(30) not null primary key,
    id_placa varchar(10) not null,
    cpf_cliente varchar(10) not null,
    retirada date not null,
    devolucao date,
    dias int not null,
    status varchar(10) not null,
    subtotal float(10,2) not null,
    foreign key (id_placa) references Veiculo(id_placa) on update cascade,
    foreign key (cpf_cliente) references Cliente(cpf_cliente) on update cascade
);

