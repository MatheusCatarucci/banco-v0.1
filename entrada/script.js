// Objeto de usuários
const usuarios = {};

// --- Cadastro ---
const formCadastro = document.getElementById("formCadastro");
if(formCadastro){
    formCadastro.addEventListener("submit", function(e){
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if(usuarios[cpf]){
            alert("CPF já cadastrado!");
            return;
        }

        usuarios[cpf] = { nome, senha };
        alert("Cadastro realizado com sucesso!");
        formCadastro.reset();
        console.log("Usuários:", usuarios);
    });
}

// --- Login ---
const formLogin = document.getElementById("formLogin");
if(formLogin){
    formLogin.addEventListener("submit", function(e){
        e.preventDefault();

        const cpf = document.getElementById('cpfLogin').value.trim();
        const senha = document.getElementById('senhaLogin').value.trim();

        if(usuarios[cpf] && usuarios[cpf].senha === senha){
            alert("Login bem-sucedido!");
            window.location.href = "/banco/banco/html"; // página fictícia
        } else {
            alert("CPF ou senha incorretos!");
        }
    });
}
