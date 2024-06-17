//Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores. Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 
let eleitores, candidatoX, candidatoY, branco, nulo, percentualX, percentualY, percbranco, percnulo
eleitores = Number(prompt('Qual o número total de eleitores?'))
candidatoX = Number(prompt('Quantos votos o candidato X recebeu?'))
candidatoY = Number(prompt('Quantos votos o candidato Y recebeu?'))
branco = Number(prompt('Quantos votos em branco houveram?'))
nulo = Number(prompt('Quantos votos nulos houveram?'))
percentualX = candidatoX * 100 / eleitores
percentualY = candidatoY * 100 / eleitores
percbranco = branco * 100 / eleitores
percnulo = nulo * 100 / eleitores
alert('A porcentagem de votos do candidato X é ' + percentualX + '%, enquanto a porcentagem de votos do candidato Y é ' + percentualY + '%. A porcentagem de votos em branco e nulos são, respectivamente, ' + percbranco + '% e ' + percnulo + '%.')
