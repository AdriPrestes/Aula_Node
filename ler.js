
var fs = require("fs");

fs.readFile("alunos.csv", "utf-8", function(erro,dados)
{
    if(erro) {
        console.log("Ocorreu um erro ao ler o arquivo");
    }
    console.log(dados);

    var linhas = dados.split("\n");

    //console.log(linhas);
    //console.log(linhas[2]);

    linhas.forEach(function(item)
    {
        var colunas = item.split(",");
        console.log("Nome " + colunas[0]);
        console.log("Idade " + colunas[1]);
        console.log("Turma " + colunas[2]);
    });
        
    
});