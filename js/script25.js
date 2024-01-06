// 25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

var numero_conta = parseInt(prompt('Digite o número da conta:'))
var saldo = parseInt(prompt('Digite o seu saldo:'))
var debito = parseInt(prompt('Digite o débito:'))
var credito = parseInt(prompt('Digite o crédito:'))
var saldo_atual = (saldo - debito + credito)

alert('Saldo atual: R$ ' + saldo_atual + '.')

saldo_atual >= 0 ? alert('Saldo Positivo') : alert('Saldo Negativo');