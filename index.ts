import readline from 'readline/promises';
//hay un error con 'readline/promises' y no se como solucionarlo pero pongo mi codigo sin las demas lineas y me corre bien,
// entonces deduzco que son estas 2 lineas el problema la 1, y ahora la 4 en 'process'
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName : string = "transporte_público";
let version : number = 3.1 ;
let userName : string = "marcoAntelo1208";

console.log("==================================");
console.log("   " + systemName + "  V " + version);
console.log("  ¡Bienvenido, "+userName+"!");
console.log("==================================");


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();