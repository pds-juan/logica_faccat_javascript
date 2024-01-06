// 9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

var salario = parseInt(prompt("Digite o valor do salário atual em reais: "))
var reajuste = parseInt(prompt("Digite quanto será o percentual de reajuste: "))

var novo_salario = salario + (salario / 100 * reajuste)

alert("O novo salário será R$ " + novo_salario + ".")