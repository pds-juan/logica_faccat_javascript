// 24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.

var salario_fixo = parseFloat(prompt('Digite o salário fixo do funcionário:'))
var valor_vendas = parseFloat(prompt('Digite o seu valor de vendas:'))
var comissao_um
var comissao_dois

if (valor_vendas <= 1500) {
    comissao_um = parseFloat(3 / 100 * valor_vendas)
    comissao_dois = 0
} else {
    comissao_um = parseFloat(3 / 100 * 1500)
    comissao_dois = parseFloat(5 / 100 * (valor_vendas - 1500))
}

var salario_total = parseFloat(salario_fixo + comissao_um + comissao_dois)
alert('O salário total do funcionário é R$ ' + salario_total + '.')