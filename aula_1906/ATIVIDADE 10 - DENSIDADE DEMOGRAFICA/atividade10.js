// Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região. Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

let habitantes, area, densidade

habitantes = Number(prompt('Quantas pessoas habitam essa região?'))
area = Number(prompt('Qual a área da região em km²?'))

densidade = habitantes / area

if (densidade >= 100) {
    alert('A densidade é ' + densidade + ' h/km², ou seja, alta!')
}
else if (densidade < 100 && densidade >= 25) {
    alert('A densidade é ' + densidade + ' h/km², ou seja, média!')
}
else if (densidade < 25) {
    alert('A densidade é ' + densidade + ' h/km², ou seja, baixa!')
}