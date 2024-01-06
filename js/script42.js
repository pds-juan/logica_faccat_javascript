/* 42) Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito:

        - Ter no mínimo 65 anos de idade.
        - Ter trabalhado no mínimo 30 anos.
        - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.

        Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'. */

var codigo_funcionario = parseInt(prompt('Digite o código do funcionário:'))
var ano_nascimento = parseFloat(prompt('Digite o ano de nascimento:'))
var ano_ingresso = parseFloat(prompt('Digite o ano de ingresso na empresa:'))
var idade_funcionario = (2023 - ano_nascimento)
var tempo_empresa = (2023 - ano_ingresso)

if (idade_funcionario >= 65 || tempo_empresa >= 30 || idade_funcionario >= 60 && tempo_empresa >= 25) {
    alert('Idade: ' + idade_funcionario + '.\nTempo de trabalho: ' + tempo_empresa + '.\nRequer aposentadoria.')
} else {
    alert('Idade: ' + idade_funcionario + '.\nTempo de trabalho: ' + tempo_empresa + '.\nNão requer aposentadoria.')
}