// 31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

var medida_a = parseInt(prompt('Digite a medida de um dos lados do triângulo:'))
var medida_b = parseInt(prompt('Digite a medida de outro lado do triângulo:'))
var medida_c = parseInt(prompt('Digite a medida do lado que restou do triângulo:'))

if (medida_a < medida_b + medida_c && medida_b < medida_a + medida_c && medida_c < medida_a + medida_b) {
    alert('As medidas apresentadas formam um triângulo.')
} else {
    alert('As medidas apresentadas não formam um triângulo.')
}