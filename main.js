function tocaSom (idTag) {
    const elemento = document.querySelector(idTag);

    if ( elemento && elemento.localName === 'audio') {
            elemento.currentTime = 0;
            elemento.play();
    } 
    else {
        console.log('Elemento não encontrado ou seletor invalido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`//Template String

    tecla.onclick = function () {
        tocaSom(idAudio);
    };


    tecla.onkeydown = function (evento) {
        if(evento.code == 'Space' && evento.code == "Enter"){
             tecla.classList.add('ativa');
        }
    }


    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa');
    }

  

}