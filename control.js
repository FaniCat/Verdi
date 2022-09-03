const buton=document.querySelector('#btn');
const nuev=document.querySelector('#nuevo');
const imagen=document.createElement('img');
const otro=document.querySelector('#gatonuevo')

function presionar(buton){

imagen.setAttribute('src', 'https://sumedico.blob.core.windows.net/images/2021/06/09/comoalimentargatobebe.jpg');

otro.append(imagen);
}