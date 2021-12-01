const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que quieres hacer?'.yellow.bgBlack,
        choices: [
            {
                value: '1',
                name: `${"1 ".green} Crear tarea`,
            },
            {
                value: '2',
                name: `${"2 ".green} Listar tareas`,
            },
            {
                value: '3',
                name: `${"3 ".green} Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${"4 ".green} Completar tarea/s`,
            },
            {
                value: '5',
                name: `${"5 ".green} Borrar tarea`,
            },
            {
                value: '0',
                name: `${"0 ".green} Salir`,
            },
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log("========================".cyan);
    console.log("   Selecciona una opción".yellow);
    console.log("========================\n".cyan);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiona ${"enter".yellow} para continuar`,
        },
    ];
    console.log("\n");
    await inquirer.prompt(question);
};

const nuevaTarea = async (message) => {
    const question = [
        {
            type: "input",
            name: "nombre",
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Porfavor, introduce la tarea"
                }
                return true;
            },
        },
    ];

    const { nombre } = await inquirer.prompt(question);
    return nombre
};

const completarTareas = async (tareas = [true]) => {
    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.nom}`,
        };
    });

    choices.unshift({
        value: "0",
        name: "0. ".green + "Cancelar",
    });

    const pregunta = [
        {
            type: "checkbox",
            name: "id",
            message: "Selecciona la tarea",
            choices,
        },
    ];

    const {id} = await inquirer.prompt(pregunta);
    return id;
};

const tareaCompletada = async (message) => {
    const question = [
        {
            type: "confirm",
            name: "ok",
            message,
        },
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
};

const eliminarSeleccion = async (tarea = []) => {
    const choices = tarea.map((tarea, i) => {
        const id2 = `${i + 1}.`.green;
        return {
            value: tarea.id,
            name: `${id2} ${tarea.nombre}`,
        };
    });

    choices.unshift({
        value: "0",
        name: "0. ".green + "Cancelar",
      });

    const pregunta = [
        {
            type: "list",
            name: "id",
            message: "Selecciona una tarea que quieras eliminar",
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
    
    const { ok } = await inquirer.prompt(question);
    return ok;
};

module.exports = {
    inquirerMenu,
    pausa,
    nuevaTarea,
    completarTareas,
    tareaCompletada,
    eliminarSeleccion,
    confirmar,
};