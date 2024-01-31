form = document.getElementById('form-validacao')


let campo1 = document.getElementById('PrimeiroValor')
let campo2 = document.getElementById('SegundoValor')

function myFunction(campo1,campo2){
    return campo2 > campo1
}

form.addEventListener('submit', function(e){


    const primeiroCampo = document.getElementById('PrimeiroValor');
    const segundoCampo = document.getElementById('SegundoValor');

    if (myFunction(primeiroCampo.value,segundoCampo.value)) {
        alert('Formulario Valido, o valor é maior.')
    }
    else(
        alert('Formulario Invalido, o valor é diferente.')
    )

})



console.log(form);
