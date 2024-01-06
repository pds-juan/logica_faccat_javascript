// 14) Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

var valor = parseInt(prompt("Digite um valor:"));

var resultado = valor > 10 ? 'É MAIOR QUE 10!' : (valor < 10 ? 'NÃO É MAIOR QUE 10!' : 'O NÚMERO É 10!');

alert(resultado)