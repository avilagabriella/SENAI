drop databse if exits renner
create database renner
use renner

create table Funcionario(
    nome varchar(20) not null primary key,
    cpf varchar(15) not null,
    salario float(10,2) not,
    cargo varchar(20) not null
);
create table Cliente(
    cpf varchar(20) not null primary key,
    nome varchar(100) not null,
    nascimento date not null,
    email varchar(30) not null
);
create table telefone(
    id int not null primary key auto_increment,
    cpf varchar(20) not null,
    tipo varchar(20) not null,
    numero varchar(20) not null,
    foreign key(cpf) references Cliente(cpf)
);
create table Cartao(
    id_cartao varchar(100) not null primary key,
    cpf_cliente varchar(20) not null,
    creditos varchar(20) not null,
    senha varchar(20) not null,
    foreign key(cpf_cliente) references Cliente(cpf)
);
create table Produto(

    id int not null primary key auto_increment,
    nome varchar(100) not null,
    preco float(10,2) not null,
    quantidade int not null,
    categoria varchar(20) not null
);
create table Pedido(
    id int not null primary key auto_increment,
    estoque varchar(20) not null,
    cpf_funcionario varchar(20) not null,
    id_produto int not null,
    cpf_cliente varchar(20) not null,   
    status varchar(20) not null,
    tipo_pagamento varchar(20) not null,
    data_pedido date not null,
     foreign key(cpf_cliente) references Cliente(cpf),
     foreign key(id_produto) references Produto(id),
     foreign key(cpf_funcionario) references Funcionario(cpf)

);





