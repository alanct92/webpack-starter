//importacion de modulos en JS
//webpack por defecto buscara el archivo index.js para trabajar

import {saludar} from './js/funciones'; //para importar un componente es necesario especificar la fuente y el componente a importar
import './styles.css';

const nombre = "Alan T";

saludar(nombre);