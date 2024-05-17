-- Cria o usuário 'novo_integrante' com acesso de qualquer host dentro da rede do Docker e define a senha
CREATE USER IF NOT EXISTS 'novo_integrante'@'%' IDENTIFIED BY 'no_hiae';

-- Concede todos os privilégios no banco de dados 'hiae' ao usuário 'novo_integrante' para acesso de qualquer host
GRANT ALL PRIVILEGES ON hiae.* TO 'novo_integrante'@'%';

-- Concede privilégios para criar, modificar, e apagar todos os bancos de dados e suas tabelas para 'novo_integrante'
GRANT ALL PRIVILEGES ON *.* TO 'novo_integrante'@'%';

-- Aplica as mudanças de privilégios
FLUSH PRIVILEGES;
