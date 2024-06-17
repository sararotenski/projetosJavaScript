// Crie um programa que solicite ao usuário um valor em horas e converta para minutos e segundos.
let horas, minutos, segundos
horas = Number(prompt('Digite o número de horas.'))
minutos = horas * 60
segundos = minutos * 60
alert(horas + ' horas é igual a ' + minutos + ' minutos e ' + segundos + ' segundos.')