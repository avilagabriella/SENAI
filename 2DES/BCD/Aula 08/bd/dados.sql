USE alugue;

-- DML População com dados de testes ou "reais"
insert into Cliente(cpf_cliente, nome_cliente, telefone) values
('111.111.111-11', 'Osvaldo Oliveira', '19-72077-0521'),
('222.222.222-22', 'Jaqueline Teixeira', '19-23003-4864'), 
('333.333.333-33', 'Keli Matos', '	19-06486-6449'), 
('444.444.444-44', 'Ursula Souza', '19-64378-2404'), 
('555.555.555-51', 'Evandro Silva', '19-53315-2734'), 

INSERT INTO Telefone (reserva, numero)
VALUES
('25/01/2024', '19-72077-0521'),
('13/03/2024', '19-23003-4864'),
('29/03/2024', ',19-53266-7923'),
('14/03/2024', '19-64378-2404'),
('25/03/2024', '19-53315-2734'),
('13/03/2024', '19-23003-4864'),
('16/02/2024', '19-72077-0521');


insert into Veiculo(id_placa, modelo, marca, diaria)values
('DEA-7981', 'Uno', 'Fiat', 100,00),
('CBC-4945','Fiorino','Fiat', 120,00),
('BEE-7735','Saveiro','VW', 100,00),
('CBA-4403','Sandeiro','Renaut', 100,00),
('BBC-8504','Palio','Fiat', 100,00),
('BEB-5885','Gol','VW', 100,00),
('EDB-2475','Ranger','Ford', 200,00);

insert into Alugueis(reserva, id_placa, cpf_cliente, retirada, devolucao, dias, status, subtotal)values
('25/01/2024', 'DEA-7981', '111.111.111-11', '25/01/2024', '04/02/2024', 10 , 'concluido', 1.000,00 ),
('13/03/2024', 'CBC-4945', '222.222.222-22', '13/03/2024', '21/03/2024', 8 , 'concluido', 960,00),
('29/03/2024','BEE-7735', '333.333.333-33', '29/03/2024', '	05/04/2024', 7 , 'concluido' 700,00),
('14/03/2024','CBA-4403', '444.444.444-44', '14/03/2024', '24/03/2024', 10, 'concluido', 1.000,00),
('29/02/2024' ,'BBC-8504','444.444.444-44', '29/02/2024', '07/03/2024' 7, 'concluido', 700,00)
('16/02/2024','BEB-5885', '111.111.111-11', '16/02/2024', '25/03/2024', 38, 'concluido', 3.800,00)
('25/03/2024', 'EDB-2475', '555.555.555-55', '25/03/2024', '#', 8 , 'alugado' , 1.600,00)
('13/03/2024', 'CBC-4945', '222.222.222-22', '13/03/2024', '21/03/2024', 8 , 'concluido', 960,00),
('25/03/2024', 'EDB-2475', '555.555.555-55', '25/03/2024', '#', 8 , 'alugado' , 1.600,00),
('25/01/2024', 'DEA-7981', '111.111.111-11', '25/01/2024', '04/02/2024', 10 , 'concluido', 1.000,00 ),
('14/03/2024','CBA-4403', '444.444.444-44', '14/03/2024', '24/03/2024', 10, 'concluido', 1.000,00),
('29/02/2024' ,'BBC-8504','444.444.444-44', '29/02/2024', '07/03/2024' 7, 'concluido', 700,00)
('29/03/2024','BEE-7735', '333.333.333-33', '29/03/2024', '	05/04/2024', 7 , 'concluido' 700,00),
('23/03/2024','BEB-5885', '222.222.222-22', '23/03/2024', '#', 10, 'alugado', 1.000,00)