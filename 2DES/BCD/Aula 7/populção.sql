INSERT INTO Manutencao(id_manutencao, inicio_manutencao, fim_manutencao, descricao)values
(1, DATE('04/03/2023 '), DATE('24/05/2023 '), 'Lanterna queimada'  ),
(2, DATE('21/03/2023  '), DATE('07/05/2023 '), 'Farol queimado  '  ),
(3, DATE('05/04/2023  '), DATE('25/05/2023  '), 'Troca de pneus dianteiros'  ),
(4, DATE('14/04/2023 '), DATE(' 24/04/2023   '), 'Troca de pneus dianteiros'  ),
(5, DATE('30/04/2023 '), DATE('07/05/2023   '), 'Farol queimado'  ),
(6, DATE('16/05/2023 '), DATE('25/05/2023 '), 'Troca de pneus traseiros'  ),
(7, DATE('05/06/2023 '), DATE('10/06/2023 '), 'Retrovisor quebrado'  ),
(8, DATE('25/06/2023 '), DATE('02/07/2023  '), 'Troca de óleo e revisão geral'  ),
(9, DATE('15/07/2023 '), DATE('19/07/2023 '), 'Troca de Flúido de Freio'  ),
(10, DATE('04/08/2023 '), DATE('10/08/2023 '), 'Problemas no cabo do acelerador'  ),
(11, DATE('24/08/2023 '), DATE('31/08/2023 '), 'Pane elétrica '  ),
(12, DATE('27/08/2023 '), DATE('04/09/2023 '), 'Rebimboca da parafuzeta'  ),
(13, DATE('30/08/2023 '), DATE('04/09/2023 '), 'Troca de cavalos por poneis'  ),
(14, DATE('02/09/2023'), DATE('07/09/2023 '), 'Lanterna queimada'  );

INSERT INTO Funcionario(matricula, nome, telefone)values
(48482, 'Osvaldo Oliveira', '19-72077-0521, 19-06078-6843'),
(48542, 'Jaqueline Teixeira', '19-23003-4864'),
(48522 , 'Keli Matos ', '19-06486-6449, 19-53266-7923'),
(48502, 'Ursula Souza', '19-64378-2404'),
(48562, 'Evandro Silva', '19-53315-2734');

INSERT INTO Veiculo(placa, marca, modelo, ano, id_manutencao,  matricula)values
('DEA-7981', 'Uno', 'Fiat', 2005, 1, 48482),
('CBC-4945', 'Fiorino', 'Fiat', 2007, 2, 48542),
('BEE-7735', 'Saveiro', 'VW', 2015, 3, 48522),
('CBA-4403', 'Sandeiro', 'Renaut', 2012, 4, 48502),
('BBC-8504', 'Palio', 'Fiat', 2004, 5, 48502),
('BEB-5885', 'Gol', 'VW', 2013, 6, 48482),
('EDB-2475', 'Ranger', 'Ford', 2005, 7, 48482),
('CBC-4945', 'Fiorino', 'Fiat', 2007, 8, 48502),
('EDB-2475', 'Ranger', 'Ford', 2005, 9, 48482),
('DEA-7981', 'Uno', 'Fiat', 2005, 10, 48502),
('CBA-4403', 'Sandeiro', 'Renaut', 2012, 11, 48562),
('BBC-8504', 'Palio', 'Fiat', 2004, 12, 48522),
('BEE-7735', 'Saveiro', 'VW', 2015, 13, 48542),
('BEB-5885', 'Gol', 'VW', 2013, 14, 48482);

select * from Manutencao;
select * from Funcionario;
select * from Veiculo;

