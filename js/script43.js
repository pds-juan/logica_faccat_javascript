/* 43) Seja o seguinte algoritmo:

        Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:

                    Variáveis
        a   b   C               Mens
        1   2   3   Não é possível formar um triângulo
        3   4   5   Triângulo Escaleno
        2   2   4   Não é possível formar um triângulo
        4   4   4   Triângulo Equilátero
        5   3   3   Triângulo Isósceles                 */

var valor_a = parseInt(prompt('Digite o valor de A:'))
var valor_b = parseInt(prompt('Digite o valor de B:'))
var valor_c = parseInt(prompt('Digite o valor de C:'))
var mens

if (valor_a < valor_b + valor_c && valor_b < valor_a + valor_c && valor_c < valor_a + valor_b) {
    if (valor_a == valor_b && valor_b == valor_c) {
        mens = 'Triângulo Equilátero'
    } else {
        if (valor_a == valor_b || valor_b == valor_c || valor_a == valor_c) {
            mens = 'Triângulo Isósceles'
        } else {
            mens = 'Triângulo Escaleno'
        }
    }
} else {
    mens = 'Não é possível formar um triângulo'
}

alert(mens)