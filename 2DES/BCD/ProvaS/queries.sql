use alugue;

show tables;

-- Crie uma consulta que liste os funcionários em ordem alfabética de nome
select * from Cliente order by nome_cliente;
-- Crie uma consulta que liste todos os funcionários e seus telefones
select f.*, t.numero as Telefone from Cliente f left join telefone t on f.reserva = t.reserva;
-- Crie uma consulta que mostre somente os veículos da marca 'Fiat' ordenados pelo ano decrescente
select * from Veiculo where marca = 'Fiat' order by diaria desc;
-- Crie uma consulta que mostre todos os dados dos veículos e a quantidade de manutenções realizadas em cada um
select v.*, count(m.id_placa) as Alugueis from Veiculo v left join Alugueis m on v.placa = m.placa group by v.placa;

-- Crie uma consulta que mostre todas as manutenções acrescida do nome do funcionário que a realizou e o modelo do veículo
create view vw_totas_as_alugue as
select m.*, f.nome_cliente as Cliente, v.modelo as Veiculo from Alugueis m left join Cliente f on m.matricula = f.reserva left join Veiculo v on m.placa = v.placa;

select * from vw_totas_as_alugue where Veiculo = 'Uno';