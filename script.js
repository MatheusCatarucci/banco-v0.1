const usuarios = {};

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    usuarios[cpf] = senha; // Adiciona ao dicionário

    console.log(usuarios); 
});