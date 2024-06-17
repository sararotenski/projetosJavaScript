//Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 
let peso, altura, imc
altura = Number(prompt('Qual a sua altura?'))
peso = Number(prompt('Qual o seu peso?'))
imc = peso / (altura * altura)
alert('O seu IMC é ' + imc + '!')