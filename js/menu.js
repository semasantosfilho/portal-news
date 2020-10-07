/* document.querySelector('.menu-abrir').onclick = function() {
    document.documentElement.classList.add('menu-ativo');
}; */

/* document.querySelector('.menu-fechar').onclick = function() {
    document.documentElement.classList.remove('menu-ativo');
}; */

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};

$('.menu-abrir').click (function() {
    $('html').addClass('menu-ativo');
});

$('.menu-fechar').click(function() {
    $('html').removeClass('menu-ativo');
});
