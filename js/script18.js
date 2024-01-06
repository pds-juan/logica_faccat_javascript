// 18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

var ano_nascimento = parseInt(prompt("Digite o seu ano de nascimento:"))
var ano_atual = parseInt(prompt("Digite o ano atual:"))
var idade = (ano_atual - ano_nascimento)

var pode_votar = idade < 16 ? 'Não pode votar!' : 'Pode votar!';

alert(pode_votar)