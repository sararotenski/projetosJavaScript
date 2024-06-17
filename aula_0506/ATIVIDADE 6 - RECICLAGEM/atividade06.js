//Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 
let plastico, papel, metal, total
plastico = Number(prompt('Quantos quilos de plástico serão entregues?'))
papel = Number(prompt('Quantos quilos de papel serão entregues?'))
metal = Number(prompt('Quantos quilos de metal serão entregues?'))
total = (plastico * 0.2) + (papel * 0.1) + (metal * 0.1)
alert('Você receberá R$ ' + total + '!')