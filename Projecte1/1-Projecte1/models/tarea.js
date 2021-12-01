const { v4: uuidv4 } = require("uuid");

class tarea {
    id = "";
    nombre = "";
    tareasHechas = false;

    constructor(nombre, hechas) {
        this.id = uuidv4();
        this.nombre = nombre;
        this.tereaRealizada = hechas;
    }
}

module.exports = tarea;