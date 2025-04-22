# Docker-DIO

Este projeto faz parte do Bootcamp Fullstack da DIO e tem como objetivo explorar conceitos e práticas relacionadas ao uso do Docker.

## Objetivos do Projeto

- Compreender os fundamentos do Docker.
- Criar e gerenciar containers.
- Construir imagens Docker personalizadas.
- Utilizar o Docker Compose para orquestração de múltiplos containers.
## Estrutura do Projeto

- **`/website`**: Contém o código principal do projeto, incluindo o arquivo `index.html`.
    - **`/website/css`**: Diretório para os arquivos de estilo (CSS).
    - **`/website/js`**: Diretório para os scripts (JavaScript).
- **`/`**: Diretório raiz contendo o arquivo de configuração do Docker, `compose.yml`.

## Pré-requisitos

- Docker instalado na máquina.
- Docker Compose configurado.

## Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/HermannDouglas/Docker-DIO
   cd Docker-DIO
   ```

2. Construa e inicie os containers:

   ```bash
   docker-compose up -d
   ```

3. Acesse a aplicação no navegador em `http://localhost:8080`.

## Tecnologias Utilizadas

- Docker
- Docker Compose
- Apache
- JavaScript
- CSS
