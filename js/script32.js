// 32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

let time_um = prompt('Digite o nome do primeiro time:')
let time_dois = prompt('Digite o nome do segundo time:')
var gols_time_um = parseInt(prompt('Digite quantos gols foram marcados pelo ' + time_um + ':'))
var gols_time_dois = parseInt(prompt('Digite quantos gols foram marcados pelo ' + time_dois + ':'))

if (gols_time_um > gols_time_dois) {
    alert(time_um + ' foi o vencedor!')
} else if (gols_time_um < gols_time_dois) {
    alert(time_dois + ' foi o vencedor!')
} else {
    alert('EMPATE.')
}