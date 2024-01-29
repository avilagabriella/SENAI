-- Exclui um banco de dados de existir(DEV)
drop database if exists lojinha;
create database lojinha;
use lojinha;

-- Criar um a tabela de Clientes
create table Clientes(
    id integer(8) primary key not null auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento time not null
);

-- Para ver a estrutura da tabela
describe Clientes;

-- Ver todas as tabelas
show tables;

-- Excluir uma tabela
drop table Clientes;