const task = require('./tarea');

require('colors');
class crearTareas {
    get llistaArr() {
        const llistat = [];
        Object.keys(this._llista).forEach((key) => {
            const tarea = this._llista[key];
            llistat.push(tarea);
        });
        return llistat;
    }
    
}
