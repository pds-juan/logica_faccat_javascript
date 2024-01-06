/* 37) Uma fruteira está vendendo frutas com a seguinte tabela de preços:

                        Até 5 Kg        Acima de 5Kg
        Morango  -  R$ 2,50 por Kg     R$ 2,20 por Kg
        Maçã    -   R$ 1,80 por Kg     R$ 1,50 por Kg

        Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */

var kg_morango = parseFloat(prompt('Digite quantos quilos de morango foram adquiridos:'))
var kg_maca = parseFloat(prompt('Digite quantos quilos de maçã foram adquiridos:'))
var valor_morangos, valor_macas, valor_total

if (kg_morango <= 5) {
    valor_morangos = (kg_morango * 2.50)
} else {
    valor_morangos = (kg_morango * 2.20)
}

if (kg_maca <= 5) {
    valor_macas = (kg_maca * 1.80)
} else {
    valor_macas = (kg_maca * 1.50)
}

valor_total = (valor_morangos + valor_macas)

if (valor_total > 25 || kg_morango + kg_maca > 8) {
    valor_total = (valor_total - (valor_total * 10 / 100))
}

alert('Valor a ser pago R$ ' + valor_total + '.')