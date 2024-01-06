/* 41) Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

                                        N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
        Média_de_Aproveitamento = ---------------------------------------------------------
                                                            7

        A atribuição de conceitos obedece a tabela abaixo:

        Média de Aproveitamento     Conceito
            > = 9,0                    A
            > = 7,5 e < 9,0            B
            > = 6,0 e < 7,5            C
            < 6,0                      D    */

var primeira_nota = parseFloat(prompt('Digite o valor da primeira nota:'))
var segunda_nota = parseFloat(prompt('Digite o valor da segunda nota:'))
var terceira_nota = parseFloat(prompt('Digite o valor da terceira nota:'))
var media_exercicios = ((primeira_nota + segunda_nota + terceira_nota) / 3)
var media_aproveitamento = ((primeira_nota + segunda_nota * 2 + terceira_nota * 3 + media_exercicios) / 7)

if (media_aproveitamento >= 9) {
    alert('Conceito A')
} else if (media_aproveitamento >= 7.5 && media_aproveitamento < 9) {
    alert('Conceito B')
} else if (media_aproveitamento >= 6 && media_aproveitamento < 7.5) {
    alert('Conceito C')
} else {
    alert('Conceito D')
}