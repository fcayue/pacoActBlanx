const tarea = require('./tarea');
const task = require('./tarea');

require('colors');
class crearTareas {
    get listaArr() {
        const llistat = [];
        Object.keys(this._llista).forEach((key) => {
            const tarea = this._lista[key];
            llistat.push(tarea);
        });
        return llistat;
    }
    
    constructor(){
        this._lista = {};
    }

    crearTarea(nombre = "", hechas) {
        const tarea = new task(nombre, hechas);
        this._lista[tarea.id] = tarea;
    }

    cargarTareaFromArray(tarea = []) {
        tarea.forEach((tarea) => {
            this._lista[tarea.id] = tarea;
        });
    }

    listarTareas() {
        console.log();
        let contador = 0;
        this.listaArr.forEach((tarea) => {
            const {nom} = tarea;
            contador++;
            console.log(`${(contador + ".").green}${(nom + "").yellow}`);
        });
    }

    listarTareasHechas() {
        console.log();
        let conta = 0;
        this.llistatArr.forEach((tarea) => {
            const { nom, tareasHechas } = tarea;
            contador++;

            if (tareasHechas == true) {
                console.log(
                    `${(contador + ".").green} ${`Nombre:`.yellow} ${nom.cyan} :: ${
                        "Completa:".yellow
                    } ${`${tareasHechas}`.green}`
                );
            } else {
                console.log(
                    `${(conta + ".").green} ${`Nombre:`.yellow} ${nom.cyan} :: ${
                        "Completa:".yellow
                    }  ${`${tareasHechas}`.red}`
                );         
            }
        });
    }

    async completarTarea(ids = []) {
        ids.forEach((id) => {
            const tarea = this._lista[id];
            if (tarea.tareasHechas == false) {
                tareas.tareasHechas = true;
            } else {
                tarea.tareasHechas = false;
            }
        });
    }

    async eliminarTarea(id2) {
        const tarea = this._lista[id2];

        tarea.id = id2;
        delete this._lista[id2];
        return id2;
        console.log(tarea);
    }
    
}

module.exports = crearTareas;
