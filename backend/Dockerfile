# Use uma imagem base com Node.js
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Instale o Prisma CLI globalmente
RUN npm install -g prisma

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Gere o Prisma Client
RUN npx prisma generate --schema=./prisma/schema.prisma

# Exponha a porta do servidor (se necessário)
EXPOSE 3000

# Comando padrão para iniciar o aplicativo
CMD ["npm", "run", "prisma:migrate"]
