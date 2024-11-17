const fs = require('fs');
const fileName = 'estudiantes.json';

function deleteStudent() {
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        try {
            const estudiantes = JSON.parse(content);

            
            const idEliminar = 2;

            
            const indice = estudiantes.findIndex(estudiante => estudiante.id === idEliminar);

            if (indice === -1) {
                console.error("Estudiante no encontrado.");
                return;
            }

            estudiantes.splice(indice, 1);

            
            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error("Error al escribir en el archivo JSON.");
                } else {
                    console.log("Estudiante eliminado con exito.");
                }
            });
        } catch (err) {
            console.error("Error al parsear el archivo JSON.");
        }
    });
}

module.exports = deleteStudent;
