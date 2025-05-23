document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove classe 'active' de todos os botões
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Adiciona 'active' apenas no botão clicado
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        
        // Filtra os cards
        document.querySelectorAll('.card').forEach(card => {
            if (filter === 'all' || card.dataset.category.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});