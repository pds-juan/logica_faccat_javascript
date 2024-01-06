// 6) Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

// var base = parseInt(prompt("Digite o valor da base do retângulo: "))
// var altura = parseInt(prompt("Digite o valor da altura do retângulo: "))

// var area = base * altura

// alert("A área do retângulo é "+area+".")

var forma = prompt('Qual é a forma geométrica?');
var base
var altura
var area;

switch (forma) {

    case 'Triângulo':
    case 'triângulo':
    case 'Triangulo':
    case 'triangulo':
        base = parseInt(prompt('Digite o valor da base:'));
        altura = parseInt(prompt('Digite o valor da altura:'));

        area = (base * altura) / 2;
        alert('A área do triângulo é: ' + area);
        break;

    case 'Retângulo':
    case 'retângulo':
    case 'Retangulo':
    case 'retangulo':
        base = parseInt(prompt('Digite o valor da base:'));
        altura = parseInt(prompt('Digite o valor da altura:'));

        area = base * altura;
        alert('A área do retângulo é: ' + area);
        break;

    default:
        alert('Não é uma forma calculável!');
}