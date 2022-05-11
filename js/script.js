const pesoDigitado = document.querySelector('#peso');
const alturaDigitada = document.querySelector('#altura');
const btnCalcular = document.querySelector('.btn-calc');
const resultadoImc = document.querySelector('.resultado-imc');
const btnLimpar = document.querySelector('.btn-limpa');
const classificaoTabela = document.querySelectorAll('tbody tr');

alturaDigitada.addEventListener('keypress', function(e){
    if(!validaCaractere(e)) {
        e.preventDefault();
    }
    alturaDigitada.value = alturaDigitada.value.replace(',','.');
})

pesoDigitado.addEventListener('keypress', function(e){
    if(!validaCaractere(e)){
        e.preventDefault();
    }
    pesoDigitado.value = pesoDigitado.value.replace(',','.');
})

btnCalcular.addEventListener('click', function(peso, altura){
    peso = pesoDigitado.value.replace(',','.');
    altura = alturaDigitada.value.replace(',','.');
    let imc = (peso / (altura**2)).toFixed(2);

    if(peso == 0 || altura == 0 || !(Number(imc))) {
        alert('Preencha corretamente todos os campos')
    } else{
        resultadoImc.textContent = imc;
        mostraNaTabela(imc)
    }

});

btnLimpar.addEventListener('click', function(){
    pesoDigitado.value = '';
    alturaDigitada.value = '';
    resultadoImc.textContent = '';
    limpaTabela();
})

function validaCaractere(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[0-9,.]';
    if(char.match(pattern)) {
        //console.log(char);
        return true;
    }
}

function limpaTabela(){
    for (let i=0; i<classificaoTabela.length; i++) {
        classificaoTabela[i].classList.remove('blue','green','yellow','orange','red');
    }
}

function mostraNaTabela(imc){
    limpaTabela();
    if(imc < 18.5){
        classificaoTabela[0].classList.add('yellow');
    }else if(imc >= 18.5 && imc <=24.9){
        classificaoTabela[1].classList.add('green');
    }else if(imc >= 25 && imc <=29.9){
        classificaoTabela[2].classList.add('yellow');
    }
    else if(imc >= 30 && imc <=34.9){
        classificaoTabela[3].classList.add('orange');
    }else {
        classificaoTabela[4].classList.add('red');
    }
}
