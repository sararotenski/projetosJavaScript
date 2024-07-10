// Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

let salario, anos, bonus, salarioTotal

salario = Number(prompt('Qual o seu salário?'))
anos = Number(prompt('Há quantos anos você trabalha?'))

if (anos > 5) {
    bonus = salario * 0.05
    salarioTotal = salario + bonus
    alert('Seu salário é de R$ ' + salarioTotal + '!')
}
else {
    alert('Seu salário continuará o mesmo!')
}