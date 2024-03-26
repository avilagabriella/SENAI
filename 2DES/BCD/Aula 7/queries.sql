1 SELECT * FROM Funcionario ORDER BY nome;
2 SELECT f.nome AS Nome_Funcionario, t.numero AS Telefone FROM Funcionario f JOIN Telefone t ON f.matricula = t.matricula;
3 SELECT * FROM Veiculo WHERE marca = 'Fiat' ORDER BY ano DESC;
4 SELECT v.placa, v.modelo, v.marca, v.ano, COUNT(m.id_Manutencao) AS Quantidade_Manutencoes FROM Veiculo v JOIN Manutencao m ON v.placa = v.placa GROUP BY v.placa, v.modelo, v.marca, v.ano;
5 CREATE VIEW vw_todas_as_manutencoes AS SELECT m.*, f.nome AS Nome_Funcionario, v.Modelo FROM Manutencao m INNER JOIN Funcionario f ON f.matricula = f.matricula INNER JOIN Veiculo v ON v.placa = v.placa;