// Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.

let real, cotacao, dolar

dolar = Number(prompt('Qual o valor em dólares?'))
cotacao = Number(prompt('Qual a cotação atual do dólar?'))

real = dolar / cotacao

if (cotacao > 5) {
    alert('O valor ' + dolar + ' dólares equivale a R$' + real + '. O dólar está caro!')
}
else {
    alert('O valor ' + dolar + ' dólares equivale a R$' + real + '. O dólar está barato!')
}