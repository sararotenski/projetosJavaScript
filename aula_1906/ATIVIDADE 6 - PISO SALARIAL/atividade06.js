// Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria. Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso. (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso)

let salarioAnual, salarioMensal, pisoSalarial

salarioAnual = Number(prompt('Quanto você recebe por ano?'))
pisoSalarial = Number(prompt('Qual o piso salarial mensal da sua profissão?'))

salarioMensal = salarioAnual / 12

if (salarioMensal > pisoSalarial) {
    alert('Seu salário mensal é R$' + salarioMensal + ', portanto, está acima do piso. ')
}
else if (salarioMensal < pisoSalarial) {
    alert('Seu salário é R$' + salarioMensal + ', portanto, está abaixo do piso.')
}
else if (salarioMensal == pisoSalarial) {
    alert('Seu salário é igual ao piso salarial.')
}