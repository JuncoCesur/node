import express from 'express';
import {dirname, join} from "path";
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import {PORT} from './config.js';

const app = express();
app.use(express.json());
//dirname  returns the directory name of a path. We use it to get the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

//Configurar el enrutador
app.use(indexRouter);


//Configurar motor de plantillas
app.set('viewengine', 'ejs');
//Creamos el servidor
app.listen(PORT);
console.log('Escuchando en el puerto 3000...')

