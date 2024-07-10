// Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são: a) Ter pelo menos 65 anos; b) Ter trabalhado pelo menos 30 anos; c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos.

let idade, tempo

idade = Number(prompt('Qual a sua idade?'))
tempo = Number(prompt('Há quantos anos você trabalha?'))

if (idade >= 65 && tempo < 30) {
    alert('Você pode se aposentar pela sua idade!')
}
else if (idade < 65 && tempo >= 30) {
    alert('Você pode se aposentar pelo seu tempo de serviço!')
}
else if (idade >= 60 && tempo >= 25) {
    alert('Você pode se aposentar!')
}
else {
    alert('Você não pode se aposentar!')
}