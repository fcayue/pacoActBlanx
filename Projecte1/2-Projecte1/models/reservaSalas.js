const Reserva = require("./reserva");
const sala = [
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
    [
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
        " U ".green,
    ],
];

class ReservaSalas {
    _lista = {
        abc: 123,
    };

    get listaArr(){
        const listado = [];
        Object.keys(this._lista).forEach((key) => {
            const reserva = this._lista[key];
            listado.push(reserva);
        });

        return listado;
    }

    constructor(){
        this._lista = {};
    }

    crearReserva(fila, columna) {
        const reserva = new Reserva(fila, columna);
        this._lista[reserva.id] = reserva;
    }

    cargarCineFromArray(cine = []) {
        cine.forEach((cine) => {
            this._lista[cine.id] = cine;
        });
    }

    recaudacion() {
        console.log(this.listaArr.length * 6, "€")
    }

    eliminarReserva(id ="") {
        delete this._lista[id];
    }

    mostrarSala(){
        let result = "";
        console.log(
            `━━━━━`.black + `▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`.bgGrey + `━━━━━`.black
        );
        console.log();

        for(let i = 0; i < sala.length; ++i) {
            result += `|`.black;
            for(let j = 0; j < sala[i].length; ++j) {
                result += sala[i][j] + `|`.black;
                this.listatArr.forEach((id) => {
                    const {fila, columna, pos} = id;
                    if (pos == " ♟ ") {
                        sala[fila][columna] = ` ♟ `.red;
                    }
                });
            }
        
            result += "\n";
        }
        
        console.log(result + `▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉`.black);
    }
}

module.exports = ReservaSalas;