document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('meuFormulario');
    const botaoEnviar = document.getElementById('botaoEnviar');
    const botaoMostrar = document.getElementById('botaoMostrar');
    const divDados = document.getElementById('dadosSalvos');


    const STORAGE_KEY = 'formData';


    function salvarDados(event){
        event.preventDefault();

        const dados = {
            nome: form.nome.value,
            endereco: form.endereco.value,
            email: form.email.value,
            telefone: form.telefone.value

        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
        alert("dados salvos com sucesso")
        form.resetxxxxxxxxxxxxxxxx
    }


    function mostrarDados () {
        const dadosSalvos = getItem(STORAGE_KEY);

        if (dadosSalvos) {
            const dados = JSON.parse(dadosSalvos);
            divDados.innerHTML = `
                <h3>Dados Salvos:</h3>
                <p><strong>Nome:</strong> ${dados.nome}</p>
                <p><strong>Endereço:</strong> ${dados.endereco}</p>
                <p><strong>Email:</strong> ${dados.email}</p>
                <p><strong>Telefone:</strong> ${dados.telefone}</p>
            `;
        } else {
            divDados.innerHTML = '<p>Nenhum dado salvo encontrado.</p>';
        }


        function limparDados() {
            localStorage.removeItem(STORAGE_KEY);
            divDados.innerHTML = '<p>Dados foram removidos.</p>';
        }


        form.addEventListener('submit', salvarDados);
        btnMostrar.addEventListener('click', mostrarDados);
        btnLimpar.addEventListener('click', limparDados);
    }






})