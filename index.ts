import readline from 'readline/promises';
//hay un error con 'readline/promises' y no se como solucionarlo pero pongo mi codigo sin las demas lineas y me corre bien,
// entonces deduzco que son estas 2 lineas el problema la 1, y ahora la 4 en 'process'
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
/*let systemName : string = "transporte_público";
let version : number = 3.1 ;
let userName : string = "marcoAntelo1208";

console.log("==================================");
console.log("   " + systemName + "  V " + version);
console.log("  ¡Bienvenido, "+userName+"!");
console.log("==================================");*/


// 🚫 No eliminar las líneas de abajo ⬇️

//ENTREGABLE DIA 8

interface Task{
    id : number;
    title: string;
    completed: boolean;
};

const agregarTarea = (titulo : string) => {
    const nuevaTarea: Task = {
        id : id,
        title : titulo,
        completed : false
    };
    Tareas.push(nuevaTarea);
    id++;
};

const listaTareas = () => {
    console.log("===========Tareas=============");
 for (let j = 0; j < Tareas.length; j++) {
               if (Tareas[j].completed) {
                 console.log(`[${Tareas[j].id}] - ${Tareas[j].title} - Completado`);
                } else {
                 console.log(`[${Tareas[j].id}] - ${Tareas[j].title} - Pendiente`);
                }
               }
};

const eliminar = () => {
    const eliminada = Tareas.pop();

    if (eliminada) {
        console.log(`
            La tarea "${eliminada.title}" fue eliminada exitosamente`);
    } else {
        console.log(`
            No hay tareas para eliminar.`);
    }
};

let Tareas : Task [] = [];
let focus: boolean = true;
let id : number = 1;
while (focus) {
    console.log(" ");
    console.log(">>>>>>> Menu <<<<<<<<");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar última tarea");
    console.log("3. Listar tareas");
    console.log("4. Salir");

    let opcion = await rl.question("Por favor escoge alguna opcion: ");
    
    if (opcion === "1") {
        console.log(" ");
        let titulo = await rl.question("Ingresa el título de la tarea: ");
        agregarTarea(titulo);
        console.log("la tarea se agrego exitosamente :D");
    } 
    else if (opcion === "2") {
        eliminar();
        } 
        else if (opcion === "3") {
               listaTareas();
            } 
            else if (opcion === "4") {
                    console.log("╔══════════════════════════════╗");
                    console.log("║       ¡HASTA PRONTO!         ║");
                    console.log("║   Gracias por usar mi app    ║");
                    console.log("╚══════════════════════════════╝");
                    focus = false;
                } 
                else {
                    console.log("Escoge una opcion valida.");
                }
}


rl.close();