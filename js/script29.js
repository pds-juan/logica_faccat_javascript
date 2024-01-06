// 29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.

var valor_a = parseInt(prompt('Digite o primeiro número:'))
var valor_b = parseInt(prompt('Digite o segundo número:'))
var valor_c = parseInt(prompt('Digite o terceiro número:'))

if (valor_a < valor_b && valor_a < valor_c) {
    alert(valor_b + ' + ' + valor_c + ' = ' + (valor_b + valor_c))
} else if (valor_b < valor_a && valor_b < valor_c) {
    alert(valor_a + ' + ' + valor_c + ' = ' + (valor_a + valor_c))
} else {
    alert(valor_a + ' + ' + valor_b + ' = ' + (valor_a + valor_b))
}