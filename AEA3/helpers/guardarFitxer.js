const fs = require("fs");

const fitxer = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(fitxer, JSON.stringify(data));
};


//Pruebas PACOCS
const eliminarDB = (id) => {
  console.log("estamos dentro del eliminar");
  console.log('---------------------------');
  var personas = JSON.parse(fs.readFileSync(fitxer,'utf-8'));
  console.log(personas.length, "personas");
  console.log(id);
  for(var i=0; i < personas.length; i++){
    // console.log(personas[i]);
      if(id == personas[i].id){
        console.log("coincide");
        console.log(personas[i].id);
        personas.splice(i,1)
      }
      
    }
    console.log("fuera del for");
    console.log(personas);
    fs.writeFileSync(fitxer, JSON.stringify(personas));
  // console.log(personas);

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
