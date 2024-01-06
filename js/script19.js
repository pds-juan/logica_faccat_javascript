// 19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

var valor_um = parseInt(prompt("Digite o primeiro valor:"))
var valor_dois = parseInt(prompt("Digite o segundo valor:"))

var maior_valor = valor_um > valor_dois ? valor_um : valor_dois;

alert("O maior valor é o " + maior_valor + ".")