// 26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.

var quantidade_atual_estoque = parseInt(prompt('Digite a quantidade atual em estoque:'))
var quantidade_maxima_estoque = parseInt(prompt('Digite a quantidade máxima de estoque:'))
var quantidade_minima_estoque = parseInt(prompt('Digite a quantidade mínima de estoque:'))
var quantidade_media_estoque = ((quantidade_maxima_estoque + quantidade_minima_estoque) / 2)

alert('A quantidade média de estoque é ' + quantidade_media_estoque + '.')

quantidade_atual_estoque >= quantidade_media_estoque ? alert('Não efetuar compra') : alert('Efetuar compra');