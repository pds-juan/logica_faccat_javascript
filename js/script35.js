/* 35) Um posto está vendendo combustíveis com a seguinte tabela de descontos:

        Álcool - até 20 litros, desconto de 3% por litro
               - acima de 20 litros, desconto de 5% por litro

        Gasolina - até 20 litros, desconto de 4% por litro
                 - acima de 20 litros, desconto de 6% por litro

        Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */

var litros_vendidos = parseFloat(prompt('Digite o número de litros vendidos:'))
var tipo_combustivel = prompt('Álcool ou Gasolina? Digite A ou G:')
var valor_total

if (tipo_combustivel == 'A' && litros_vendidos <= 20) {
    valor_total = ((litros_vendidos * 2.90) - ((litros_vendidos * 2.90) * 3 / 100))
} else if (tipo_combustivel == 'A' && litros_vendidos > 20) {
    valor_total = ((litros_vendidos * 2.90) - ((litros_vendidos * 2.90) * 5 / 100))
} else if (tipo_combustivel == 'G' && litros_vendidos <= 20) {
    valor_total = ((litros_vendidos * 3.30) - ((litros_vendidos * 3.30) * 4 / 100))
} else if (tipo_combustivel == 'G' && litros_vendidos > 20) {
    valor_total = ((litros_vendidos * 3.30) - ((litros_vendidos * 3.30) * 6 / 100))
}

alert('O valor a pagar é R$ ' + valor_total + '.')