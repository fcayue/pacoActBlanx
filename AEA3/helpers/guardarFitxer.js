const fs = require("fs");

const fitxer = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(fitxer, JSON.stringify(data));
};


//Pruebas PACOCS
const eliminarDB = (id) => {
  console.log(id);
  console.log('---------------------------');
  var personas = JSON.parse(fs.readFileSync(fitxer,'utf-8'));
  console.log(personas.length);
  for(var i=0; i < personas.length; i++){
      if(id == personas[i].id){
        delete personas.id;
      }
    }
  console.log(personas);

  // var str = JSON.stringify(personas);
  // fs.writeFile(fitxer, str, function(err){
  //   if(err){
  //     console.error(err);
  //   }
  //   console.log("Eliminado correctamente")
  // })
}
  
  

  


const readDB = () => {
  if (!fs.existsSync(fitxer)) {
    return null;
  }

  const info = fs.readFileSync(fitxer, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};

// JSON
// 2 mètodes: stringify (pasar JSON a string)
// parse -> pase string a JSON

module.exports = {
  guardarDB,
  readDB,
  eliminarDB,
};
