#!/bin/bash

# Executa o Docker Compose para o ambiente de desenvolvimento
run_dev() {
  docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
}

# Executa o Docker Compose para o ambiente de produção
run_prod() {
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
}

# Build apenas das imagens para desenvolvimento ou produção
build_images() {
  if [ "$1" == "dev" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.dev.yml build
  elif [ "$1" == "prod" ]; then
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml build
  else
    echo "Uso: $0 build [dev|prod]"
    exit 1
  fi
}

# Verifica o argumento passado para determinar o ambiente a ser executado
if [ "$1" == "dev" ]; then
  echo "► Develop mode active"
  echo ""
  run_dev
elif [ "$1" == "prod" ]; then
  echo "► Production mode active"
  echo ""
  run_prod
elif [ "$1" == "build" ]; then
  if [ -z "$2" ]; then
    echo "Uso: $0 build [dev|prod]"
    exit 1
  fi
  echo "► Building images for $2"
  echo ""
  build_images $2
else
  echo "Uso: $0 [dev|prod|build [dev|prod]]"
  exit 1
fi
