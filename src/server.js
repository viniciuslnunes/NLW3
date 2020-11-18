//Importar pacote/biblioteca/dependencia
const express = require("express");
const path = require("path");

//Iniciando o express
const server = express();
server

//Utilizando arquivos estáticos
.use(express.static('public'))

//Criar uma rota  (server.get('/index.html'))
.get("/public/images/arrow.svg", (request, response) => {

  //console.log(path.join(__dirname, 'views', "index.html"));  
  return response.sendFile(path.join(__dirname + '/views/index.html'));
});

//Ligar o servidor
server.listen(5500);
