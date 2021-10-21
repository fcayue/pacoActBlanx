// const { argv } = require('yargs');
const yargs = require('yargs')

yargs.version('1.1.0');

yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder:{
        fileName:{
            describe: "File Name",
            type: "string"
        },
        fileContent:{
            describe: "File Content",
            type: "number"
        }
    }

})

console.log(yargs.argv.fileName);
