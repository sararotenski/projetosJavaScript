//Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.
let sem1, sem2, sem3, sem4, media
sem1 = Number(prompt('Olá! Quantas horas você estudou na primeira semana?'))
sem2 = Number(prompt('Quantas horas você estudou na segunda semana?'))
sem3 = Number(prompt('Quantas horas você estudou na terceira semana?'))
sem4 = Number(prompt('Quantas horas você estudou na quarta semana?'))
media = (sem1 + sem2 + sem3 + sem4) / 4
alert('A média de horas que você estudou semanalmente foi ' + media + '!')