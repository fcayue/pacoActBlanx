var fs = require('fs');

var fileName = process.argv[2];
var fileContent = process.argv[3]

auxPos = fileName.indexOf("=");
fileName = fileName.substr(auxPos+1);

auxPos = fileContent.indexOf("=");
fileContent = fileContent.substr(auxPos+1);



fs.writeFile(fileName,fileContent, (err) => {
	if(err) return err;
	console.log("The file has been saved");
});process.argv[3]
