// Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

let altura, peso, imc

altura = Number(prompt('Qual a sua altura?'))
peso = Number(prompt('Quanto você pesa?'))

imc = peso / (altura * altura)

if (imc < 18) {
    alert('Seu IMC é ' + imc + '. Você está abaixo do peso ideal!')
}
else if (imc >= 18 && imc <= 25) {
    alert('Seu IMC é ' + imc + '. Você está no peso ideal!')
}
else if (imc > 25) {
    alert('Seu IMC é ' + imc + '. Você está acima do peso!')
}