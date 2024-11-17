const fs = require('fs');

const fileName = 'estudiantes.json';

const estudiantes = [
    { id: 1, nombre: 'Maria Lopez', edad: 20, carrera: 'Ingenieria en Sistemas' },
    { id: 2, nombre: 'Carlos Martinez', edad: 22, carrera: 'Derecho' },
    { id: 3, nombre: 'Ana Perez', edad: 19, carrera: 'Medicina' }
];

function create() {
    fs.writeFile(fileName, JSON.stringify(estudiantes, null, 2), (err) => {
        if (err) {
            console.error("Error al crear el archivo JSON.");
        } else {
            console.log("Archivo JSON creado con exito.");
        }
    });
}

module.exports = create;
