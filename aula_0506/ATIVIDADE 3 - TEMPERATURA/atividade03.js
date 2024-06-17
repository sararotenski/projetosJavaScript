//Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 
let celsius, fahrenheit
celsius = Number(prompt('Digite a temperatura em Celsius!'))
fahrenheit = (celsius * (9/5)) + 32
alert('A temperatura em Fahrenheit é ' + fahrenheit + '°F!')