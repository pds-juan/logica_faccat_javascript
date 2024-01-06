/* 23) Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém erros, identifique os erros no algoritmo apresentado abaixo:

        Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas:

        - para sexo masculino: peso ideal = (72.7 * altura) - 58
        - para sexo feminino: peso ideal = (62.1 * altura) - 44.7   */

let nome = prompt('Digite o seu nome:')
let sexo = prompt('Digite o seu sexo:')
var altura = parseFloat(prompt('Digite a sua altura:'))
var peso_ideal

if (sexo = 'm' || 'M' || 'Masculino' || 'masculino' || 'MASCULINO') {
    peso_ideal = parseFloat((72.7 * altura) - 58)
} else if ((sexo = 'f' || 'F' || 'Feminino' || 'feminino' || 'FEMININO')) {
    peso_ideal = parseFloat((62.1 * altura) - 44.7)
}

alert('O seu peso ideal é ' + peso_ideal + ' kg.')