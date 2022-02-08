// /**
//  * This file is just a silly example to show everything working in the browser.
//  * When you're ready to start on your site, clear the file. Happy hacking!
//  **/

import {registerImage} from "./pluging/lazy"
// // console.log('Happy hacking :)')
// //crear imagen y agregar al contenedor
 const max=123;
 const min = 1;
 const random = () => Math.floor(Math.random()*(max - min))+ min

 const createImageNode = ()=>{
     //la funcion de esta funcion es darme un nodo de lo q yo
     //considero es una imagen
//      <div class="p-4">
//      <img
//   class="mx-auto" 
//     width="320" 
//     src="https://randomfox.ca/images/5.jpg" alt=""> 

//    </div>
const container = document.createElement('div');
container.className="p-4";
 const imagen = document.createElement("img");
 imagen.className="mx-auto";
 imagen.width='320';
//imagen.src = "https://randomfox.ca/images/5.jpg"; //to do
//return imagen;
// //va a ser un templat literal donde el id es de la funcion random
//imagen.src =`https://randomfox.ca/images/${random()}.jpg`; //to do
//como es valida el navegador inicia a cargarle
//por eso la quitamos, y es algo muy comun en HTML y JS
//y es utilizar el dataset
imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
// //le vamos a dar el datset
//esta tecnica se lo utiliza mucho para comunicar la informacion entre html y JS


 container.appendChild(imagen);
 return container;
 };

 const nuevaImagen = createImageNode();
 const mountNode= document.getElementById("images");
// //como solo hay un boton podemos utilizar el queryselector xq es unico
 const addButton = document.querySelector("button");
//const accion = ()=>console.log("hey");
//addButton.addEventListener("click",accion);
 //este algo no es muy util
// //algo mucho mejor
 const addImage = ()=> {
    const newImage = createImageNode();
    //mountNode.append(nuevaImagen, 
      //  createImageNode(),
    //createImageNode(),
    //createImageNode());
mountNode.append(newImage);
registerImage(newImage);
 }
// };

// //nodoMontaje.appendChild(nuevaImagen);
 addButton.addEventListener("click",addImage);









