// 7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

var anos = parseInt(prompt("Digite quantos anos de idade você possui (sem considerar meses e dias): "))
var meses = parseInt(prompt("Digite quantos meses de idade você possui (sem considerar anos e dias): "))
var dias = parseInt(prompt("Digite quantos dias de idade você possui (sem considerar anos e meses): "))

var dias_idade = (anos * 365) + (meses * 30) + dias

alert("Sua idade total em dias é " + dias_idade + ".")