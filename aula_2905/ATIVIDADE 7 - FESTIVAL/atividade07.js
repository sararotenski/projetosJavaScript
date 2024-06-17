//Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.
let pessoas, banheiros, bares
pessoas = Number(prompt('Digite a quantidade de pessoas esperadas.'))
banheiros = pessoas / 50
bares = pessoas / 150
alert('Serão necessários ' + Math.ceil(banheiros) + ' banheiros e ' + Math.ceil(bares) + ' bares!')
