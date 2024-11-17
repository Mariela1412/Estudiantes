const readline = require('readline');

const create = require('./create');
const AddStudent = require('./add');
const read = require('./read');
const modify = require('./modify');
const contar = require('./count');
const deleteStudent = require('./delete');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('\n--- Menú ---');
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar estudiante');
    console.log('4. Modificar estudiante');
    console.log('5. Eliminar estudiante');
    console.log('6. Ver cuantos estudiantes hay');
    console.log('7. Salir');
}

function handleMenuOption(option) {
    switch (option) {
        case '1':
            create();
            break;
        case '2':
            read();
            break;
        case '3':
            AddStudent();
            break;
        case '4':
            modify();
            break;
        case '5':
            deleteStudent();
            break;
        case '6':
            contar();
            break;
        case '7':
            console.log("Saliendo del programa.");
            rl.close();
            return;
        default:
            console.log("Opción no valida. Intente de nuevo.");
            break;
    }

    setTimeout(promptMenu, 1000); 
}

function promptMenu() {
    showMenu();
    rl.question('Seleccione una opcion: ', handleMenuOption);
}

promptMenu();
