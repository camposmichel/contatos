# Desafio - Contatos

Projeto criado em Nodejs para atender ao desafio de criar uma API REST para gerenciar Contatos.

### Pré-requisitos

Certifique-se que todos os requisitos necessário para o sistema funcionar estejam instalados.

[Node.js](https://nodejs.org/en/download/) - 8.9
[MongoDB](https://www.mongodb.com/) - 3.6

### Instalando e executando

Baixe o repositório
```
git clone git@github.com:camposmichel/contatos.git
```

Instale as dependencias do projeto

```
cd contatos
npm install
```

Rode a aplicação

```
node bin/www
```

A aplicação agora estara executando na url http://localhost:3000/
Utilize algum software, como por exemplo o [Postman](https://www.getpostman.com/) para realizar as requisições **GET, POST, PUT e DELETE**.

## Realizando testes

O modelo de dados aceito pela api é um JSON no seguinte formato:
```
{
    "nome": "", // OBRIGATORIO
    "canal": "", // OBRIGATORIO
    "valor": "", // OBRIGATORIO
    "obs": ""
}
```

Os endpoints das requisições são os seguintes:

* GET - http://localhost:3000/ - Lista os contatos
* POST - http://localhost:3000/ - Cadastra um novo contato
* GET - http://localhost:3000/:idContato - Retornar os dados de um contato
* PUT - http://localhost:3000/:idContato - Atualiza os dados de um contato
* DELETE - http://localhost:3000/:idContato - Deleta um contato
* GET - http://localhost:3000/:size - Lista os contatos em uma determinada quantidade
* GET - http://localhost:3000/:size/:page - Lista os contatos em uma determinada quantidade paginando os dados

## Reportando erros

Caso você localize algum erro, por favor abra uma issue.

## Contribuindo

Caso você queira contribuir com o projeto, abra um branch espeficiando o que você está ajustando/complementando e me envie um **Pull Request**.

## Autores

* **Michel Campos** - [LinkedIn](https://www.linkedin.com/in/michel-campos-94a141a2/)

## Licença

Este projeto está sob a licença MIT

