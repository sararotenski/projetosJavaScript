// Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.
let distancia, tempo, velocidade
distancia = Number(prompt('Qual a distância da trilha que você fez (em km)?'))
tempo = Number(prompt('Quanto tempo você levou para fazer essa trilha (em horas)?'))
velocidade = distancia / tempo
alert('Sua média de velocidade durante essa trilha foi de ' + velocidade + 'km/h.')