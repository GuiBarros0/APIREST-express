Criando uma API REST com Express
---

Este é um projeto bem simples de implementação de uma API REST
utilizando [Node.js](https://nodejs.org/en/) e o _framework_ [Express](https://expressjs.com/).

criando um CRUD salvando-o em mémoria, com id autoincremental.

# Instalação

Clone este repositório e dentro dele digite:

``` shell
npm install
```
Para instalar as dependências manualmente do projeto.

``` shell
npm i --save-dev nodemon@1.14.11 -E
```

``` shell
npm i --save body-parser@1.18.2 -E
```

# Execução

Para executar a aplicação, faça:

``` shell
npm start
```

Implementa os métodos DELETE, GET, POST e PUT dentro da `/database`:

``` 
curl localhost:3003/database/1
{"name":"Notebook","preco":2000.00
```


# Testes

Para executar a rotina de testes, use:

``` shell
npm start
```
