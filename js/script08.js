// 8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

var eleitores = parseInt(prompt("Digite o número de eleitores: "))
var votos_brancos = parseInt(prompt("Digite a quantidade de votos em branco: "))
var votos_nulos = parseInt(prompt("Digite a quantidade de votos nulos: "))
var votos_validos = parseInt(prompt("Digite a quantidade de votos válidos: "))

var percent_brancos = (100 / eleitores) * votos_brancos
var percent_nulos = (100 / eleitores) * votos_nulos
var percent_validos = (100 / eleitores) * votos_validos

alert("O percentual de votos brancos foi de " + percent_brancos + "%.")
alert("O percentual de votos nulos foi de " + percent_nulos + "%.")
alert("O percentual de votos válidos foi de " + percent_validos + "%.")