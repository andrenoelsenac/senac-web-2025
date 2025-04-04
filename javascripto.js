function somaAsBagaca() {
    const el1 = document.getElementById('n1');
    const el2 = document.getElementById('n2');

    const resultado = document.getElementById('resultado');

    resultado.value = parseInt(el1.value) + parseInt(el2.value);
}

document.getElementById('butao').addEventListener('click', somaAsBagaca);