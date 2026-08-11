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


let Tareas : string[] = [];
let focus= true;
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
        Tareas.push(titulo);
        console.log("la tarea se agrego exitosamente :D");
    } 
    else if (opcion === "2") {
        let eliminada = Tareas.pop();
        console.log(" ");
        console.log(`La tarea "${eliminada}" fue eliminada exitosamente`);
        } 
        else if (opcion === "3") {
               console.log("===========Tareas=============");
               for (let j = 0; j < Tareas.length; j++) {
               console.log(`${j + 1}. ${Tareas[j]}`);
               }
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