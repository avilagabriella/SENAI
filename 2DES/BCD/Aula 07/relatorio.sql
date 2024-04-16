CREATE VIEW vw_todas_as_manutencoes AS
SELECT m.id_Manutencao,
       m.inicio_Manutencao,
       m.fim_Manutencao,
       m.descricao,
       f.nome AS nome_funcionario,
       v.modelo
FROM Manutencao m
JOIN Funcionario f ON m.matricula = f.matricula
JOIN Veiculo v ON m.placa = v.placa;
