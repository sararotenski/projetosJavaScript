// Criar um programa que simule o login de um roteador. O nome de usuário (username) é "admin" e a senha (password) "123". Pedir ao usuário para digitar username e password. Caso os dados estejam corretos, mostrar uma mensagem "Login efetuado!", caso contrário "Login falhou!". (DESAFIO: Mostrar mensagens específicas para erro de username, de password ou de ambos).

let username, password

username = prompt('Digite o nome de usuário!')
password = prompt('Digite a senha!')

if (username == 'admin' && password == '123') {
    alert('Login efetuado!')
}
else if (username == 'admin' && password != '123') {
    alert('A senha está incorreta!')
}
else if (username != 'admin' && password == '123') {
    alert('O nome de usuário está incorreto!')
}
else {
    alert('O nome de usuário e a senha estão incorretos!')
}