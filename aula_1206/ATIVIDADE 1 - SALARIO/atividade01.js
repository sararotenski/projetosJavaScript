// Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.
let salarioBruto, salarioLiquido
salarioBruto = Number(prompt('Qual o seu salário bruto?'))
salarioLiquido = salarioBruto - (salarioBruto * 0.20)
alert('Seu salário líquido é R$' + salarioLiquido + '!')