const fs = require('fs');
const fileName = 'estudiantes.json';

function modify() {
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        try {
            const estudiantes = JSON.parse(content);
            
            const idModificar = 2; 
            
            const indice = estudiantes.findIndex((estudiante) => estudiante.id === idModificar);
            
            if (indice === -1) {
                console.error("Estudiante no encontrado.");
                return;
            }
            
            estudiantes[indice].edad = 23;
            
            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error("Error al cambiar la edad del estudiante.");
                } else {
                    console.log("Edad del estudiante cambiada exitosamente.");
                }
            });
        } catch {
            console.error("Error al parsear el archivo JSON.");
        }
    });
}

module.exports = modify;
