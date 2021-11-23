require('colors');

const {
    inquirerMenu,
    pausa,
    nuevaTarea,
    eliminarSeleccion,
    confirmar,
    completarTareas,
} = require('./helpers/inquirer');
const {guardarDB, readDB} = require = ('./helpers/guardarFichero');

const crearTareas = require("./models/crearTarea");
const tarea = require('./models/tarea');

