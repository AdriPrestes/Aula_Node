const express = require('express');
const app = express();

const aula2 = require("../aula2");

app.get("/", function(req,res){

    let result = aula2(3,5);

    res.send("Olá galera!<br />" + "O resultado é: " + result);
})

app.get("/sobre", function(req,res){
    console.log(req.query);
    res.send("Sobre o sistema, pagina: " +req.query.pagina)
})

app.listen(3000, function()
{
    console.log("Servidor iniciado")
});