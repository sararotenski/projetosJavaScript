// Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

let nome, idade, comorbidade 

nome = prompt('Qual o seu nome?')
idade = Number(prompt('Quantos anos você tem?'))
comorbidade = prompt('Você possui alguma comorbidade?')

if (idade >= 60 || comorbidade == 'sim') {
    alert('Pode se vacinar!')
}
else {
    alert('Não pode se vacinar!')
}