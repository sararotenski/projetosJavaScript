// Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.
let casais, individuos, areaTotal
casais = Number(prompt('Digite o número de casais de leões existentes dentro de uma reserva que possui 9 fêmeas e 5 machos!'))
individuos = 14 - casais * 2
areaTotal = (individuos * 320) + (casais * 400)
alert('A área total dominada é ' + areaTotal + 'km²!')