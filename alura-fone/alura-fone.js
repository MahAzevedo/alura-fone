document.querySelector('input[type=tel]');

const listaDeTeclas = document.querySelectorAll('input=button');

console.log(listaDeTeclas);

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (indice = 0; indice < listaDeTeclas.length; indice ++) {
  const tecla = listaDeTeclas[indice];
  
  tecla.onClick = function () {
    inputTel.value = inputTel.value + tecla.value;
  }

}




