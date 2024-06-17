//  Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.
let atv, sem, pro, atvPeso, semPeso, proPeso, peso, atvTotal, semTotal, proTotal, total
atv = Number(prompt('Qual nota você tirou na Atividade Individual?'))
atvPeso = Number(prompt('Qual o peso dessa nota?'))
sem = Number(prompt('Qual nota você tirou no Seminário em Equipe?'))
semPeso = Number(prompt('Qual o peso dessa nota?'))
pro = Number(prompt('Qual nota você tirou no Projeto Final?'))
proPeso = Number(prompt('Qual o peso dessa nota?'))
atvTotal = atv * atvPeso
semTotal = sem * semPeso
proTotal = pro * proPeso
peso = atvPeso + semPeso + proPeso
total = (atvTotal + semTotal + proTotal) / peso
alert('A média total é ' + total + '!')