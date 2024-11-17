const fs = require('fs');
const fileName = 'estudiantes.json';

function contar() { 
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        const estudiantes = JSON.parse(content);
        console.log(`La cantidad de estudiantes es: ${estudiantes.length}`);
    });
}

module.exports = contar;
