//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 
let nasc, ano, idade, meses, semanas, dias
nasc = Number(prompt('Qual o ano em que você nasceu (YYYY)?'))
ano = Number(prompt('Em qual ano estamos (YYYY)?'))
idade = ano - nasc
meses = idade * 12
semanas = idade * 52
dias = idade * 365
alert('Você possui ' + idade + ' anos, podendo também ser escrito em ' + meses + ' meses, ' + semanas + ' semanas ou ' + dias + ' dias.')