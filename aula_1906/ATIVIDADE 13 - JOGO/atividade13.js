//  Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

let dano, vida

dano = Number(prompt('Quanto de dano você recebeu?'))

vida = 100 - dano

if (vida <= 0) {
    alert('Game over!')
}
else if (vida > 0 && vida <= 20) {
    alert('Dano crítico, quase sem vida!')
}
else if (vida > 20 && vida <= 50) {
    alert('Dano moderado, vida estável!')
}
else if (vida > 50) {
    alert('Dano leve, vida boa!')
}