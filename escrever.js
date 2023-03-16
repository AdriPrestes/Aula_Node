// escreve em arquivo txt nome e idade


var fs = require("fs");


var nome = "Adriane";
var idade = 22;
var turma = 333;


var erro = function(erro){
   if(erro)
   {
       console.log("deu pau");
   } else
   {
       console.log("terminou de escrever");
   }
  
}


var linha = nome + "," +idade + "," +turma + "\n";


console.log("antes de escrever");
fs.writeFile("alunos.csv", linha, {flag: "a+"}, erro);
console.log("depois de escrever");

