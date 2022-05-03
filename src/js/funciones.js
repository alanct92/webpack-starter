import '../css/componentes.css'; //para poder incorporar una hoja de estilos
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = nombre => { //para poder exportar algun componente es necesario anteponer la palabra clave export
    // console.log("Creando etiqueta h1");

    const header1 = document.createElement('h1');
    header1.innerText = `Hola ${nombre}`;

    document.body.append(header1);

    //imagen
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    
    // document.body.append(img);
}