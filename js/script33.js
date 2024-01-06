/* 33) Ler dois valores e imprimir uma das três mensagens a seguir:

        ‘Números iguais’, caso os números sejam iguais
        ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
        ‘Segundo maior’, caso o segundo seja maior que o primeiro.      */

var valor_a = parseInt(prompt('Digite o primeiro número:'))
var valor_b = parseInt(prompt('Digite o segundo número:'))

if (valor_a > valor_b) {
    alert('Primeiro é maior')
} else if (valor_a < valor_b) {
    alert('Segundo maior')
} else {
    alert('Números iguais')
}