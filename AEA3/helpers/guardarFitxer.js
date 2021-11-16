const fs = require("fs");

const fitxer = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(fitxer, JSON.stringify(data));
};


//Pruebas PACOCS
const eliminarDB = (id) => {
  
  var personas = JSON.parse(fs.readFileSync(fitxer,'utf-8'));
  
  for(var i=0; i < personas.length; i++){
    // console.log(personas[i]);
      if(id == personas[i].id){
        console.log("coincide");
        console.log(personas[i].id);
        personas.splice(i,1)
      }
      
    }
    
    
    fs.writeFileSync(fitxer, JSON.stringify(personas));
    console.log("actualizadojson")
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
