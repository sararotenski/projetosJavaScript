// Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

let numeroUm, numeroDois

numeroUm = Number(prompt('Digite um número.'))
numeroDois = Number(prompt('Digite outro número.'))

if (numeroUm > numeroDois) {
    alert('O número ' + numeroUm + ' é maior que o número ' + numeroDois + '!')
}
else if (numeroDois > numeroUm) {
    alert('O número ' + numeroDois + ' é maior que o número ' + numeroUm + '!')
}
else if (numeroUm = numeroDois) {
    alert('Os números ' + numeroUm + ' e ' + numeroDois + ' são iguais!')
}