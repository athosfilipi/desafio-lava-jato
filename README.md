# Projeto Lava Jato

Este é um sistema de agendamento para lavagens automotivas. O projeto é dividido em três partes principais: um serviço backend, um frontend e um banco de dados MySQL.

## Tecnologias Utilizadas

- **Backend:** Node.js com Express e Prisma
- **Frontend:** React com TypeScript
- **Banco de dados:** MySQL
- **Containerização:** Docker e Docker Compose

## Configuração Local

Para rodar este projeto localmente, você precisará ter o Docker e o Docker Compose instalados em sua máquina.

Docker: https://www.docker.com/

## Arquivos de configuração

`Para efeitos didaticos, mantive os arquivos.env no repositório`

- `docker-compose.yml`: Arquivo base com definições comuns para ambos os ambientes.
- `docker-compose.dev.yml`: Extensão para o ambiente de desenvolvimento.
- `docker-compose.prod.yml`: Extensão para o ambiente de produção.
- `run-docker-compose.sh`: Script para facilitar a execução em diferentes ambientes.

### Passos para Configuração e Execução

1. **Clonar o Repositório**

   Primeiro, clone este repositório para sua máquina local usando:

   ```bash
   git clone https://github.com/athosfilipi/desafio-lava-jato.git   
   ```

2. **Construir e Rodar com Docker Compose**

   Na raiz do projeto, execute o seguinte comando para construir e iniciar todos os serviços definidos no `docker-compose.yml`:

   ```bash
   bash run-docker-compose.sh build dev
   ```

3. **Acessar os Serviços**

   - O **frontend** estará disponível em `http://localhost:3001`
   - O **backend** estará acessível em `http://localhost:4000`
   - O **MySQL** estará rodando na porta `3316`


## Para o ambiente de desenvolvimento

   ```sh
   $ bash ./run-docker-compose.sh dev
   ```

## Para o ambiente de produção

   ```sh
   $ bash ./run-docker-compose.sh prod
   ```


### Comandos Úteis

- **Ver logs do Docker Compose:**

  ```bash
  $ docker-compose logs -f
  ```

- **Parar e remover os serviços:**

  ```bash
  $ docker-compose down
  ```

  Para remover os volumes criados junto com os contêineres:

  ```bash
  $ docker-compose down --volumes
  ```

  Para acessar o terminal do container do banco de dados

   ```bash
   $ docker-compose exec db sh
   $ mysql -h db -P 3306 -u novo_integrante -p
   ```

# Passos para Resolver Problemas de acesso ao mysql

### 1. Iniciar os Contêineres do Docker

- Inicie os contêineres com o comando:

```bash
docker-compose up -d
```

### 2. Verificar a Conexão do MySQL

Acesse o contêiner do banco de dados e teste a conexão com o MySQL.

```bash
$ docker-compose exec db sh
$ mysql -h db -P 3306 -u novo_integrante -p
```

- Verifique se a conexão é bem-sucedida.

### 3. Mostrar Privilégios do Usuário _(Dentro do contêiner)_

Certifique-se de que o usuário novo_integrante tem os privilégios corretos.

```SQL
SHOW GRANTS FOR 'novo_integrante'@'%';
```

Se necessário, conceda os privilégios adequados:

```SQL
GRANT ALL PRIVILEGES ON *.* TO 'novo_integrante'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

outra opção é:

```SQL
GRANT ALL PRIVILEGES ON *.\_ TO 'novo_integrante'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

Não esqueça de sair do container ao finalizar.

```SQL
exit
```

### 4. Executar a Migração do Prisma

No `diretório do backend`, execute a migração do Prisma.

```sh
npx prisma migrate dev --name init --schema=./prisma/schema.prisma
```

### 5. Verificar Tabelas Criadas

Verifique se as tabelas foram criadas corretamente no banco de dados.

```bash
$ docker-compose exec db sh
$ mysql -h db -P 3306 -u novo_integrante -p
```

```SQL
USE hiae;
SHOW TABLES;
```




