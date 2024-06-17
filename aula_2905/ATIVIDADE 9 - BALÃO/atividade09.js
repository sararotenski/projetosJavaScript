// Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.
let pessoas, tempo, valor1, valor2, total
pessoas = Number(prompt('Quantas pessoas irão ao passeio?'))
tempo = Number(prompt('Quanto tempo, em minutos, durará o passeio?'))
valor1 = (tempo * 2) * 15
valor2 = pessoas * 20
total = valor1 + valor2
alert('O preço total do passeio será ' + total + '!')