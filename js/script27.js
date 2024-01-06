// 27) Ler um valor e escrever se é positivo, negativo ou zero.

var valor = parseInt(prompt('Digite um número:'))

if (valor == 0) {
    alert('O valor é 0.')
} else if (valor > 0) {
    alert('O valor ' + valor + ' é positivo.')
} else {
    alert('O valor ' + valor + ' é negativo.')
}