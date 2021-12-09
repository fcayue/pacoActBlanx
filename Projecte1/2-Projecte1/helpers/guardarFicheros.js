const fs = require("fs");

const fichero = "./db/data.json";


const guardarDB = (data) => {
    fs.writeFileSync(fichero, JSON.stringify(data));
};
  
const readDB = () => {
    if (!fs.existsSync(fichero)) {
        return null;
    }
  
    const info = fs.readFileSync(fichero, { encoding: "utf-8" });
    const data = JSON.parse(info);
  
    return data;
};

  
module.exports = {
    guardarDB,
    readDB,
};
  