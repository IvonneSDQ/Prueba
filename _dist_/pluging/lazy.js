const isIntersecado = (entry)=>{
//     //true si esta dentro y false si no
//     //200px lejos de la pantalla has tal cosa
    return entry.isIntersecting;
    //hace parte de la API y tiene como propiedad
    //el ser intersecado

 };

 const loadImage =(entry)=>{
     const container=entry.target;
    // const imagen = container.querySelector('img');
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    //console.log('holis');
    //console.log(nodo.nodeName);
    //debugger;
    //pero no debemos hacer q se siga haciendo la accion
    //entonces debemos hacer que se deje de ejecutar
    //cuando la accion se ejecute
    //como q ya hiciste algo
    //entonces desregistra la imagen
    //o deja de escucharla
    observer.unobserve(container)//debemos decirle cual nodo se ejecuta
    //en este momento
    //afortunadamente esta API trae en su primer argumento
    //el entry q en ese momento sucede y 
    //dentro del entre accedo al target y ahi le digo q deje de
    //escuchar el nodo en ese momento
    //es decir ya hiciste la accion olvidate de ella xq ya no
    //necesitamos
    //entonces logramos el comportamiento deseado de que me
    //escucha en el momento en el q sea visible y luego se
    //olvida y les desregistra

 };

const observer = new IntersectionObserver((entries)=>{
    entries
    .filter(isIntersecado)
     .forEach(loadImage)
 })//recibe 
// //una funcion para saber que hacer por cada imagen
// //y asi nos pasa todo lo que esta poniendo atencion
// //a nosotros nos interesa las imagenes

export const registerImage = (imagen) =>{
    observer.observe(imagen);
 };

 // // const cargarImagen =(entry)=>{
// //     const nodo = entry.target;
// //     const imagen = contenedor.firstChild;
// //     const url = imagen.dataset.src;
// //     imagen.src=url;
// //     //desregistra la imagen
// //     observador.unobserve(nodo);
// // };

// // const observador = new IntersectionObserver((entradas)=>{
// //     entradas
// //     .filter(esIntersecada)
// //     .forEach(cargarImagen)
// // })//recibe 
// // //una funcion para saber que hacer por cada imagen
// // //y asi nos pasa todo lo que esta poniendo atencion
// // //a nosotros nos interesa las imagenes

// // const registrarImagen = (imagen) =>{
// //     observador.observe(imagen);
// // };
