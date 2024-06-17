//Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar. Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).
let arroz, batataPalha, suco, troco, valorCompra
arroz = Number(prompt('Quanto custa o arroz?'))
batataPalha = Number(prompt('Quanto custa a batata-palha?'))
suco = Number(prompt('Quanto custa o suco?'))
valorCompra = arroz + batataPalha + suco
troco = 100 - valorCompra
alert('Você tem direito a receber ' + troco + ' reais de troco!')