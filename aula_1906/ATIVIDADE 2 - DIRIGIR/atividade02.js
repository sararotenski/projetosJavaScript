// Crie uma programa que verifique se uma pessoa pode dirigir. Deve ser perguntada a a idade da pessoa e se ela tiver idade suficiente para dirigir (18 anos ou mais), exiba "Você pode dirigir", caso contrário, exiba "Você ainda não pode dirigir".

let idade

idade = Number(prompt('Quantos anos você tem?'))

if (idade >= 18) {
    alert('Você pode dirigir!')
}
else {
    alert('Você não pode dirigir!')
}