document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('meuFormulario');
    const botaoEnviar = document.getElementById('botaoEnviar');
    const botaoMostrar = document.getElementById('botaoMostrar');
    const botaoLimpar = document.getElementById('botaoLimpar');
    const botaoWhatsApp = document.getElementById('botaoWhatsApp');
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

    function enviarWhatsApp() {
        let telefoneDestino = document.getElementById('telefoneDestino').value;
    
        
        telefoneDestino = telefoneDestino.replace(/\D/g, '');
    
        
        if (!telefoneDestino.startsWith('55')) {
            telefoneDestino = '55' + telefoneDestino;
        }
    
        if (telefoneDestino.length < 12 || telefoneDestino.length > 13) {
            alert('Número inválido. Verifique se está no formato correto com DDD e número.');
            return;
        }
    
        const dados = {
            nome: form.nome.value,
            endereco: form.endereco.value,
            email: form.email.value,
            telefone: form.telefone.value
        };
    
        const mensagem = `Olá! Aqui estão os dados cadastrados:%0A%0A`
            + `*Nome:* ${dados.nome}%0A`
            + `*Endereço:* ${dados.endereco}%0A`
            + `*Email:* ${dados.email}%0A`
            + `*Telefone:* ${dados.telefone}`;
    
        const url = `https://api.whatsapp.com/send?phone=${telefoneDestino}&text=${mensagem}`;
    
        window.open(url, '_blank');
    }
    
    

    form.addEventListener('submit', salvarDados);
    botaoMostrar.addEventListener('click', mostrarDados);
    botaoLimpar.addEventListener('click', limparDados);
    botaoWhatsApp.addEventListener('click', enviarWhatsApp);
});
