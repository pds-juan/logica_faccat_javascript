/* 34) Seja o seguinte algoritmo:
        
        Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:

        --------- Variáveis ---------
        X      Y       Z     Resposta
        3      2      11        B
      150      3     455        C
        7     -1      -2        A
       -2      5      -5        A
       50      3     155        C     */

var x = parseInt(prompt('Digite o valor de x:'))
var y = parseInt(prompt('Digite o valor de y:'))
var z = ((x * y) + 5)
let resposta

if (z <= 0) {
    resposta = 'A'
} else if (z <= 100) {
    resposta = 'B'
} else {
    resposta = 'C'
}

alert(z + ', ' + resposta)