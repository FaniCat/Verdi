const buton=document.querySelector('#btn');
const nuev=document.querySelector('#nuevo');
const imagen=document.createElement('img');
const imagen2=document.createElement('img');
const otro=document.querySelector('#gatonuevo');
const otro2=document.querySelector('#gatonuevo2');
function presionar(){

imagen.setAttribute('src', 'https://sumedico.blob.core.windows.net/images/2021/06/09/comoalimentargatobebe.jpg');

otro.append(imagen);
}

function presionar2(){

    imagen2.setAttribute('src', 'https://statics.memondo.com/p/99/cfs/2014/02/CF_9316_347a0a81ac314844bd8f159ac4379aea_gatos_el_gato_vaca_no_esta_para_bromas_thumb_fb.jpg?cb=4937626');
    
    otro2.appendChild(imagen2);
    }

