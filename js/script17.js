// 17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.

var primeira_nota = parseFloat(prompt("Digite o valor da primeira nota:"))
var segunda_nota = parseFloat(prompt("Digite o valor da segunda nota:"))
var media = (primeira_nota + segunda_nota) / 2

if (media >= 6) {
    alert("O aluno foi aprovado!\nMédia: " + media + ".")
} else {
    alert("O aluno foi reprovado.\nMédia: " + media + ".")
}