document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navItems = document.getElementById('nav-items');
    
    // Toggle menu quando o botão hamburguer for clicado
    menuBtn.addEventListener('click', function() {
        navItems.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link (melhor experiência em mobile)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navItems.classList.remove('active');
        });
    });
});