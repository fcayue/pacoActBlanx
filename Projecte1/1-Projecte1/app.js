require('colors');


const {
    inquirerMenu,
    pausa,
    nuevaTarea,
    eliminarSeleccion,
    confirmar,
    completarTareas,
  } = require("./helpers/inquirer");
  const { guardarDB, readDB } = require("./helpers/guardarFichero");
  
  const crearTareas = require("./models/crearTarea");
  const tarea = require("./models/tarea");


const main = async () => {
    let opt = "";
    const tareas = new crearTareas();
    const tareaDB = readDB();

    if (tareaDB) {
        tareas.cargarTareaFromArray(tareaDB);
    }

    do {
        opt = await inquirerMenu();

        switch(opt) {
            case "1":
                const nombreTarea = await nuevaTarea("Tarea: ");
                tareas.crearTarea(nombreTarea, false);

                console.log();
                console.log(`${"Tarea creada correctamente".yellow}`);
                break;
            case "2":
                tareas.listarTareas();
                break;
            case "3":
                tareas.listarTareasHechas();
                break;
            case "4":
                const ids = await completarTareas(tareas.listaArr);
                console.log(ids);
                tareas.completarTarea(ids);
                console.log(`${"TAREA COMPLETADA".yellow}`);
                break;
            case "5":
                const id2 = await eliminarSeleccion(tareas.listaArr);

                if (id2 !== "0") {
                    const confirm = await confirmar(
                        `${"Seguro que quieres eliminar la tarea?".yellow}`
                    );

                    if (confirm !== false) {
                        tareas.eliminarTarea(id2);

                        console.log("Tarea eliminada");
                    } else {
                        console.log("La tarea no se ha eliminado");
                    }
                }
                break;

            default:
                break;
        }

        guardarDB(tareas.listaArr);
        await pausa();
    } while (opt !== "0");
};

main();