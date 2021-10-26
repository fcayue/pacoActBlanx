var fs = require('fs');
const { argv } = require('process');

// const yarg = require("yargs")
// .usage("hi")
// .options("fileName", {demandOption: true})
// .options("fileContent", {demandOption: true})
// .argv;

// var file = argv.fileName;
// console.log(file);

var argv = require('yargs/yargs')(process.argv.slice(2)).argv;
console.log('(%d,%d)', argv.x, argv.y);
console.log(argv._);


// fileContent = yarg.argv[1];


// fs.writeFile(fileName,fileContentarg.argv[, (err) => {
// 	if(err) return err;
// 	console.log("The file has been saved");
// });	
