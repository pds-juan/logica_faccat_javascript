/* 13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:
                            n1 * 2 + n2 * 3 + n3 * 5
        mediafinal = -----------------------------------
                                        10                  */

var primeira_nota = parseInt(prompt("Digite o valor da primeira nota:"));
var segunda_nota = parseInt(prompt("Digite o valor da segunda nota:"));
var terceira_nota = parseInt(prompt("Digite o valor da terceira nota:"));

var media = ((primeira_nota * 2) + (segunda_nota * 3) + (terceira_nota * 5)) / 10

alert("A média final do aluno é " + media + ".")