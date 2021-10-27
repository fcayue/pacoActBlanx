const yargs = require('yargs');
var fs =require('fs');


yargs.command({
    command : 'add',
    describe: "Adding a File",
    builder: {
        nombre : {
            describe: 'Nombre'
        },
        horas : {
            describe: 'Horas'
        },
    }
})

fs.writeFile(yargs.argv.nombre,yargs.argv.horas, (err) => {
	if(err) return err;
	console.log("The file has been saved");
});
