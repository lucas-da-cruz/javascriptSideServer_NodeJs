/*O que é um módulo Node?
é como se fosse uma biblioteca, é um conjunto de funcionalidades
que nos permite resolver determinada tarefa
Um arquivo qualquer com a extensão Js já é um modulo*/

//Importando módulo
//const http = require('http');

const app = require('./src/config/custom-express');

app.listen(3000, function(){
	console.log("iniciou");
})