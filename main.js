function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null){
        console.log('Elemento não encontrado');
    }
    if (elemento != null ){
        if (elemento.localName === 'audio'){
            elemento.play();
        }
    }
}
document.querySelector('.tecla_pom').onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto               ou 9
// while (contador < listaDeTeclas.length){
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;
//     tecla.onclick = function(){
//         tocaSom(idAudio)
//     }
//     contador = contador + 1;
// }

for (let contador = 0; contador < listaDeTeclas.length; contador ++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}