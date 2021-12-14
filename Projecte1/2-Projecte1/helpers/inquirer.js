const {countReset} = require("console");
const inquirer = require("inquirer");
const iquirer = require("inquirer");
const { async } = require("rxjs");
require("colors");

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "Que quieres hacer?",
        choices: [
            {
                value: "1",
                name: `${"1 ".green} Nueva reserva`,
            },
            {
                value: "2",
                name: `${"2 ".green} Mostrar sala`,
            },
            {
                value: "3",
                name: `${"3 ".green} Mostrar recaudación`,
            },
            {
                value: "4",
                name: `${"4 ".green} Eliminar reserva`,
            },
            {
                value: "0",
                name: `${"0 ".green} Salir`,
            },
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log("======= ".cyan +`CINE MAX`.yellow+ " =======".cyan);
    console.log("   Selecciona una opción".yellow);
    console.log("========================\n".cyan);
  
    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async () => {
    const question = [
        {
            type: "input",
            name: "enter",
            message: `Presiona ${"enter".yellow} para continuar`,
        },
    ];
    console.log("\n");
    await inquirer.prompt(question);
};

const nuevaFila = async (message) => {
    const question = [
        {
            type: "input",
            name: "nombre",
            message,
            validate(value) {
                if(value.length === 0) {
                    return "Porfavor, introduce un numero";
                } else if (value > 7) {
                    return "Porfavor, introduce un valor entre 0-7"
                }
                return true;
            },
        },
    ];

    const {nombre} = await inquirer.prompt(question);
    return nombre;
};

const nuevaColumna = async (message) => {
    const question = [
        {
            type: "input",
            name: "nombre",
            message,
            validate(value) {
                if(value.length === 0) {
                    return "Porfavor, introduce un numero";
                } else if (value > 7) {
                    return "Porfavor, introduce un valor entre 0-7"
                }
                return true;
            },
        },
    ];

    const {nombre} = await inquirer.prompt(question);
    return nombre;
};

const reservaSelect = async (reservas = []) => {
    const choices = reservas.map((reservas, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: reserva.id,
            name: `${idx} Fila: ${reserva.fila.green} :: Butaca: ${reserva.columna.red}`,
        };
    });

    choices.unshift({
        value: "0",
        name: "0. ".green + "Cancel·lar",
    });
    const pregunta = [
        {
          type: "list",
          name: "id",
          message: "Selecciona la reserva",
          choices,
        },
    ];
    
    const { id } = await inquirer.prompt(pregunta);
    return id;
};

const confirmar = async (message) => {
    const question = [
        {
            type: "confirm",
            name: "ok",
            message,
        },
    ];

    const {ok} = await inquirer.prompt(question);
    return ok;
};

module.exports = {
    inquirerMenu,
    pausa,
    nuevaFila,
    nuevaColumna,
    reservaSelect,
    confirmar
}
