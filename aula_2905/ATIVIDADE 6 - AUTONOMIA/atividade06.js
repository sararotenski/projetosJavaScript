// Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.
let distancia, litros, autonomia
distancia = Number(prompt('Qual foi a distância percorrida em quilômetros?'))
litros = Number(prompt('Quantos litros foram gastos para percorrer essa distância?'))
autonomia = distancia / litros
alert('O veículo percorre ' + autonomia + 'km/L!')