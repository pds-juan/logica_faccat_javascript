/* 40) Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:

        - Se quantidade <= 5 o desconto será de 2%
        - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
        - Se quantidade > 10 o desconto será de 5%                      */

let nome = prompt('Digite a descrição do produto:')
var quantidade_adquirida = parseInt(prompt('Digite a quantidade adquirida:'))
var preco_unitario = parseInt(prompt('Digite o preço por unidade:'))
var total = (quantidade_adquirida * preco_unitario)
var desconto, total_a_pagar

if (quantidade_adquirida <= 5) {
    desconto = (total * 2 / 100)
} else if (quantidade_adquirida > 5 && quantidade_adquirida <= 10) {
    desconto = (total * 3 / 100)
} else {
    desconto = (total * 5 / 100)
}

total_a_pagar = (total - desconto)

alert('Produto: ' + nome + '.\nTotal: R$ ' + total + '.\nDesconto: R$ ' + desconto + '.\nTotal a pagar: R$ ' + total_a_pagar)