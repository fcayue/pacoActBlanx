const {countReset} = require("console");
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

