// Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.
let livro1, livro2, livro3, total, totalDesc
livro1 = Number(prompt('Digite o preço do primeiro livro!'))
livro2 = Number(prompt('Digite o preço do segundo livro!'))
livro3 = Number(prompt('Digite o preço do terceiro livro!'))
total = livro1 + livro2 + livro3
totalDesc = total - (total * 0.15)
alert('O valor total da compra sem desconto é R$' + total +' e, com desconto, é R$' + totalDesc + '!')