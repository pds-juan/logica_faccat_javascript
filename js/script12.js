/* 12) Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius (baseado na fórmula abaixo):
            C           F - 32
         ---------- = -----------
            5              9
        Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F */

var fahrenheit = parseInt(prompt("Digite a quantidade de graus em Fahrenheit:"))

var celsius = (fahrenheit - 32) / 9 * 5

alert("O valor correspondente em graus Celsius é " + celsius + "°.")