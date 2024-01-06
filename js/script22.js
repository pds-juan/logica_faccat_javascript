// 22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).

var horas_trabalhadas = parseFloat(prompt("Digite quantas horas foram trabalhadas no mês:"))
var salario_hora = parseFloat(prompt("Digite o salário por hora (em reais):"))
var horas_extras

if (horas_trabalhadas > 160) {
    horas_extras = parseFloat((horas_trabalhadas - 160) * (salario_hora / 2))
} else {
    horas_extras = 0
}

var salario_total = parseFloat(horas_trabalhadas * salario_hora + horas_extras)
alert("O salário total do funcionário será R$ " + salario_total + ".")