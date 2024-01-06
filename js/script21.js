// 21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

var hora_inicio = parseInt(prompt("Digite o horário de início da partida de xadrez (desconsidere os minutos):"))
var hora_fim = parseInt(prompt("Digite o horário de fim da partida de xadrez (desconsidere os minutos):"))
var duracao

if (hora_inicio < hora_fim) {
    duracao = (hora_fim - hora_inicio)
} else {
    duracao = ((24 - hora_inicio) + hora_fim)
}

alert("A partida de xadrez durou " + duracao + " horas.")