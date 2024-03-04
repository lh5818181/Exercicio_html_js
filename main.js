$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeDaAtividade = $('input').val();
        const novaAtividade = $(`<li>${nomeDaAtividade}</li>`)

        $(novaAtividade).appendTo('ul')
        $('input').val('')
    })


    $('ul').on('click', 'li', function(e){
        e.preventDefault();

        $(this).toggleClass('CortarAtividade')


    })




})
