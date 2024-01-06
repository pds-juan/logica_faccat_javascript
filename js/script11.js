// 11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

var salario_fixo = parseInt(prompt("Digite o valor do salário do funcionário em reais:"))
var quant_vendas = parseInt(prompt("Digite a quantidade de vendas realizadas pelo funcionário:"))
var vendas_total = parseInt(prompt("Digite o valor total de suas vendas:"))
var comissao_fixa = parseInt(prompt("Digite o valor fixo que ele recebe por cada venda:"))

var comissao_vendas = vendas_total / 100 * 5

var salario_final = salario_fixo + (quant_vendas * comissao_fixa) + comissao_vendas

alert("O salário final do funcionário será R$ " + salario_final + ".")