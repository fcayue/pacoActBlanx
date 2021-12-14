require("colors");

const {
    inquirerMenu,
    pausa,
    novaColumna,
    novaFila,
    reservaSelect,
    confirmar,
    nuevaColumna,
    nuevaFila,
} = require("./helpers/inquirer");
const {guardarDB, readDB} = require("./helpers/guardarFicheros");

const Reserva = require("./models/reservaSalas");
const { async } = require("rxjs");

const main = async () => {
    let opt = "";
    const reservas = new Reserva();

    const reservaDB = readDB();

    if (reservaDB) {
        reservas.cargarCineFromArray(reservaDB);
    }

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case "1":
                const columna = await nuevaColumna("Butaca(0-7)");
                const fila = await nuevaFila("Fila(0-7)");
                reservas.crearReserva(columna, fila);
                break;
            case "2":
                reservas.mostrarSala();
                break;
            case "3":
                reservas.recaudacion();
                break;
            case "4":
                const id2 = await reservaSelect(reservas.listaArr);
                if (id2 !== "0") {
                    const ok = await confirmar(
                        "Estas segur que vols eliminar la reserva?"
                    );
                    if (ok) {
                        reservas.eliminarReserva(id2);
                        console.log("Reserva eliminada!");

                    }
                }
                break;

            default:
                break;

        }

        guardarDB(reservas.listaArr);

        await pausa();
    } while (opt !== "0");
};

main();