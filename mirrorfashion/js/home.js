$('.novidades button').click(function() {
    $('.novidades').toggleClass('painel-aberto');
    if ($('.novidades button').text() == "Mostrar menos") {
        $('.novidades button').text("Mostrar mais")
    } else if ($('.novidades button').text() == "Mostrar mais") {
        $('.novidades button').text("Mostrar menos")
    }
});

$('.mais-vendidos button').click(function() {
    $('.mais-vendidos').toggleClass('painel-aberto');
    if ($('.mais-vendidos button').text() == "Mostrar menos") {
        $('.mais-vendidos button').text("Mostrar mais")
    } else if ($('.mais-vendidos button').text() == "Mostrar mais") {
        $('.mais-vendidos button').text("Mostrar menos")
    }
});