// 30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.

var valor_a = parseInt(prompt('Digite o primeiro número:'))
var valor_b = parseInt(prompt('Digite o segundo número:'))
var valor_c = parseInt(prompt('Digite o terceiro número:'))

if (valor_a > valor_b && valor_b > valor_c) {
    alert('Ordem crescente: ' + valor_c + ', ' + valor_b + ' e ' + valor_a + '.')
} else if (valor_a > valor_c && valor_c > valor_b) {
    alert('Ordem crescente: ' + valor_b + ', ' + valor_c + ' e ' + valor_a + '.')
} else if ((valor_b > valor_a && valor_a > valor_c)) {
    alert('Ordem crescente: ' + valor_c + ', ' + valor_a + ' e ' + valor_b + '.')
} else if ((valor_b > valor_c && valor_c > valor_a)) {
    alert('Ordem crescente: ' + valor_a + ', ' + valor_c + ' e ' + valor_b + '.')
} else if ((valor_c > valor_a && valor_a > valor_b)) {
    alert('Ordem crescente: ' + valor_b + ', ' + valor_a + ' e ' + valor_c + '.')
} else if ((valor_c > valor_b && valor_b > valor_a)) {
    alert('Ordem crescente: ' + valor_a + ', ' + valor_b + ' e ' + valor_c + '.')
}