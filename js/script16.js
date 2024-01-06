// 16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.

var quantidade = parseInt(prompt("Digite a quantidade de maçãs:"))

var preco = quantidade >= 12 ? 1 : 1.30;

alert("O custo total da compra é R$ " + (quantidade * preco) + ".")