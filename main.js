form = document.getElementById('form-validacao')


let campo1 = document.getElementById('PrimeiroValor')
let campo2 = document.getElementById('SegundoValor')

function myFunction(campo1,campo2){
    return campo1 !== campo2
}

form.addEventListener('submit', function(e){


    const primeiroCampo = document.getElementById('PrimeiroValor');
    const segundoCampo = document.getElementById('SegundoValor');

    if (myFunction(primeiroCampo.value,segundoCampo.value)) {
        alert('É diferente')
    }
    else(
        alert('tudo ok')
    )

})



console.log(form);
