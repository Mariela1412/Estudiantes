const fs = require('fs');
const fileName = 'estudiantes.json';

function AddStudent() {
    fs.readFile(fileName, 'utf8', (err, contenido) => {
        if (err) {
            console.error("Error al leer el archivo JSON.");
            return;
        }
        const estudiantes = JSON.parse(contenido);
        
        const nuevoEstudiante = { id: 4, nombre: 'Luis Hernandez', edad: 21, carrera: 'Arquitectura' };
        estudiantes.push(nuevoEstudiante);

        try {
            fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
                if (err) {
                    console.error("Error al escribir en el archivo JSON.");
                    return;
                }
                console.log("Estudiante agregado con exito!");
            });
        } catch (err) {
            console.error("Error al procesar el archivo JSON.");
        }
    });
}

module.exports = AddStudent;
