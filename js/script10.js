// 10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

var valor_fabrica = parseInt(prompt("Digite o valor de fábrica do carro em reais: "))

var percent_distribuidor = valor_fabrica / 100 * 28
var percent_impostos = valor_fabrica / 100 * 45

var valor_final = valor_fabrica + percent_distribuidor + percent_impostos

alert("O valor final do carro será R$ " + valor_final + ".")