const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let lastScrollTop = 0; // Armazena a última posição do scroll
const header = document.querySelector("header"); // Seleciona o header

// Detecta o movimento do scroll
window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica se o usuário está rolando para baixo ou para cima
    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        header.classList.add("hidden"); // Adiciona a classe para esconder o header
    } else {
        // Rolando para cima
        header.classList.remove("hidden"); // Remove a classe para mostrar o header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos no scroll
});
