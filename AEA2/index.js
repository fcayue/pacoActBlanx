var fs = require('fs');

const yarg = require("yargs")
.usage("hi")
.options("fileName", {demandOption: true})
.options("fileContent", {demandOption: true})
.argv;

var file = yarg.argv[-fileName];
console.log(file);
// console.log(fileName);



// fileContent = yarg.argv[1];


// fs.writeFile(fileName,fileContentarg.argv[, (err) => {
// 	if(err) return err;
// 	console.log("The file has been saved");
// });	
