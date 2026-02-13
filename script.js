// script.js

// Função para preencher dados dinamicamente (exemplo de uso de JS)
function preencherDados() {
    // Pode ser usado para carregar dados de um arquivo JSON ou API
    // Exemplo: preencher informações se os elementos existirem
    const nomeElement = document.getElementById('nome');
    if (nomeElement) {
        // Já está preenchido no HTML, mas poderia vir de um objeto
        console.log('Currículo carregado para:', nomeElement.textContent);
    }
}

// Alternar tema claro/escuro
function initTemaToggle() {
    const button = document.getElementById('temaButton');
    
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Altera o ícone e texto do botão (opcional)
        const icon = button.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            button.innerHTML = '<i class="fas fa-sun"></i> Alternar Tema';
        } else {
            button.innerHTML = '<i class="fas fa-paint-brush"></i> Alternar Tema';
        }
    });
}

// Animação de entrada suave (opcional)
window.addEventListener('load', () => {
    preencherDados();
    initTemaToggle();
    
    // Pequena animação nos itens
    const items = document.querySelectorAll('.item, .skill-tag');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});