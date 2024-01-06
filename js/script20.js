// 20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

var valor_um = parseInt(prompt("Digite o primeiro valor:"))
var valor_dois = parseInt(prompt("Digite o segundo valor:"))

var ordem_crescente = valor_um < valor_dois ? (valor_um + ", " + valor_dois) : (valor_dois + ", " + valor_um);

alert("A ordem crescente é " + ordem_crescente + ".")