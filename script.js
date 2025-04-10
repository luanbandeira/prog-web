document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meuFormulario');
    const botaoEnviar = document.getElementById('botaoEnviar');
    const botaoMostrar = document.getElementById('botaoMostrar');
    const botaoLimpar = document.getElementById('botaoLimpar'); 
    const divDados = document.getElementById('dadosSalvos');

    const STORAGE_KEY = 'formData';

    function salvarDados(event) {
        event.preventDefault();

        const dados = {
            nome: form.nome.value,
            endereco: form.endereco.value,
            email: form.email.value,
            telefone: form.telefone.value
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
        alert("Dados salvos com sucesso");
        form.reset();
    }

    function mostrarDados() {
        const dadosSalvos = localStorage.getItem(STORAGE_KEY);

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
    }

    function limparDados() {
        localStorage.removeItem(STORAGE_KEY);
        divDados.innerHTML = '<p>Dados foram removidos.</p>';
    }

    
    form.addEventListener('submit', salvarDados);
    botaoMostrar.addEventListener('click', mostrarDados);
    botaoLimpar.addEventListener('click', limparDados);
});