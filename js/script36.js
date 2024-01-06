// 36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.

var idade_primeiro_homem = parseInt(prompt('Digite a idade do primeiro homem:'))
var idade_segundo_homem = parseInt(prompt('Digite a idade do segundo homem:'))
var idade_primeira_mulher = parseInt(prompt('Digite a idade da primeira mulher:'))
var idade_segunda_mulher = parseInt(prompt('Digite a idade da segunda mulher:'))
var soma, produto

if (idade_primeiro_homem > idade_segundo_homem) {
    soma = idade_primeiro_homem
    produto = idade_segundo_homem
} else {
    soma = idade_segundo_homem
    produto = idade_primeiro_homem
}

if (idade_primeira_mulher < idade_segunda_mulher) {
    soma = (soma + idade_primeira_mulher)
    produto = (produto * idade_segunda_mulher)
} else {
    soma = (soma + idade_segunda_mulher)
    produto = (produto * idade_primeira_mulher)
}

alert('A soma da idade do homem mais velho com a mulher mais nova é ' + soma + '.\nO produto da idade do homem mais novo com a mulher mais velha é ' + produto + '.')