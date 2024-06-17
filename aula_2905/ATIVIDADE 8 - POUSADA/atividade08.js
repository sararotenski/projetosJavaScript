// Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.
let pessoas, diaria, cafe, total
pessoas = Number(prompt('Quantas pessoas são?'))
diaria = Number(prompt('Quantas dias vocês ficarão?'))
cafe = Number(prompt('Quantas pessoas pagarão o café da manhã?'))
total = (diaria * 280) + (cafe * 15)
alert('O valor total a pagar é de R$' + total + '!')