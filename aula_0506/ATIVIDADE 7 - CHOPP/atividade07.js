//Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.
let media, desperdício, sobra
desperdício = Number(prompt('300 litros de chopp foram comprados para 45 pessoas consumirem. Quantos litros foram desperdiçados? \n(Se não houve desperdício, digite 0.)'))
sobra = Number(prompt('Quantos litros sobraram? \n(Se não houve sobra, digite 0.)'))
media = (300 - desperdício - sobra) / 45
alert('A média de litros de chopp bebidos por pessoa é ' + media + 'L!')