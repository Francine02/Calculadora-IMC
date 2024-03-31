const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const button = document.querySelector('#button');
const resultado = document.querySelector('#result');

function calculo () {
    const pesoValor = parseFloat(peso.value);
    const alturaValor = parseFloat(altura.value);

    if (isNaN(pesoValor) || isNaN(alturaValor)) {
        resultado.innerHTML = `<h1>ERRO! Informe seus dados corretamente.</h1>`;
        return; 
    } else {
        const imc = pesoValor / (alturaValor * alturaValor);

        mudarElemento(imc)
    }
}

function mudarElemento (imc) {
    if (imc <= 18.5 ) {
        resultado.innerHTML = `
        <img src="./img/abaixo.png" alt="" class="img-responsive">
        <h1>IMC: ${imc.toFixed(2)}</h1>
        <p>&lt;18,5</p>
        <h5>Abaixo do normal</h5>
        `
    } 
    else if (imc >= 18.6 && imc <= 24.9) {
        resultado.innerHTML = `
        <img src="./img/normal.png" alt="" class="img-responsive">
        <h1>IMC: ${imc.toFixed(2)}</h1>
        <p>18,6 - 24,9</p>
        <h5>Normal</h5>
        `
    }
    else if (imc >= 25.00 && imc <= 29.9) {
        resultado.innerHTML = `
        <img src="./img/sobrepeso.png" alt="" class="img-responsive">
        <h1>IMC: ${imc.toFixed(2)}</h1>
        <p>25,00 - 29,9</p>
        <h5>Sobrepeso</h5>
        `
    }
    else if (imc >= 30 && imc <= 39.9) {
        resultado.innerHTML = `
        <img src="./img/grau1.png" alt="" class="img-responsive">
        <h1>IMC: ${imc.toFixed(2)}</h1>
        <p>30,00 - 39,9</p>
        <h5>Obesidade</h5>
        `
    }
    else if (imc >= 40.00) {
        resultado.innerHTML = `
        <img src="./img/grau3.png" alt="" class="img-responsive">
        <h1>IMC: ${imc.toFixed(2)}</h1>
        <p>&lt;40,00</p>
        <h5>Obesidade grau III</h5>
        `
    }
}