// Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.
let largura, comprimento, area, azulejos, valor
largura = Number(prompt('Digite a largura da piscina (em metros)!'))
comprimento = Number(prompt('Digite o comprimento da piscina (em metros)!'))
area = largura * comprimento
azulejos = area * 120
valor = area * 91
alert('Quantidade de azulejos necessária: ' + azulejos + '\nValor total a ser pago: ' + valor)