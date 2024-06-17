//Na volta as aulas cada aluno(a) ganhará 2 bombons (1 para si e 1 para os pais), além de 1 bombom para o(a) professor(a). Faça um programa no qual seja digitado a quantidade de alunos da turma e mostrando quantos bombons no total devem ser comprados.
let alunos, bombons
alunos = Number(prompt('Qual o número total de alunos?'))
bombons = alunos * 2 + 1
alert('Devem ser comprados ' + bombons + ' bombons!')