import readline from "readline/promises";
//hay un error con 'readline/promises' y no se como solucionarlo pero pongo mi codigo sin las demas lineas y me corre bien,
// entonces deduzco que son estas 2 lineas el problema la 1, y ahora la 4 en 'process'
import { stdin as input, stdout as output } from "process";

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

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const agregarTarea = async (titulo: string): Promise<void> => {
  try {
    if (titulo === "") {
      throw new Error();
    }
    const nuevaTarea: Task = {
      id: id,
      title: titulo,
      completed: false,
    };
    Tareas.push(nuevaTarea);
    await saveToBD(nuevaTarea);
    id++;
  } catch (error) {
    console.log(`Error: Debes de agregar si o si un titulo`);
  }
};

const listaTareas = () => {
  console.log("===========Tareas=============");
  for (let j = 0; j < Tareas.length; j++) {
    const { id, title, completed } = Tareas[j];
    if (completed) {
      console.log(`[${id}] - ${title} - Completado`);
    } else {
      console.log(`[${id}] - ${title} - Pendiente`);
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

let Tareas: Task[] = [];
let focus: boolean = true;
let id: number = 1;
while (focus) {
  console.log(" ");
  console.log(">>>>>>> Menu <<<<<<<<");
  console.log("1. Agregar Tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Lista de todas las tareas");
  console.log("4. Marcar tarea completada");
  console.log("5. Lista de tareas pendientes");
  console.log("6. Lista de tareas completadas");
  console.log("7. Salir");

  let opcion = await rl.question("Por favor escoge alguna opcion: ");

  if (opcion === "1") {
    console.log(" ");
    let titulo = await rl.question("Ingresa el título de la tarea: ");
    await agregarTarea(titulo);
  } else if (opcion === "2") {
    eliminar();
  } else if (opcion === "3") {
    listaTareas();
  } else if (opcion === "4") {
    let idSelect: number = Number(
      await rl.question("Ingresa el id de la tarea: "),
    );
    const marcarCompletado: Task | undefined = Tareas.find(function (
      tarea: Task,
    ): boolean {
      return tarea.id === idSelect;
    });
    if (marcarCompletado) {
      marcarCompletado.completed = true;
      console.log(`La tarea "${marcarCompletado.title}" fue completada.`);
    } else {
      console.log("No se encontró una tarea con ese ID.");
    }
  } else if (opcion === "5") {
    console.log("=========Tareas pendientes==========");
    const tareasPendientes: Task[] = Tareas.filter(function (
      tareas: Task,
    ): boolean {
      return !tareas.completed;
    });
    for (let f = 0; f < tareasPendientes.length; f++) {
      const { id, title, completed } = tareasPendientes[f];
      console.log(`[${id}] - ${title} - Pendiente`);
    }
  } else if (opcion === "6") {
    console.log("=========Tareas Completadas==========");
    const tareasCompletadas: Task[] = Tareas.filter(function (
      tareas: Task,
    ): boolean {
      return tareas.completed;
    });
    for (let h = 0; h < tareasCompletadas.length; h++) {
      const { id, title, completed } = tareasCompletadas[h];
      console.log(`[${id}] - ${title} - Completado`);
    }
  } else if (opcion === "7") {
    console.log("╔══════════════════════════════╗");
    console.log("║       ¡HASTA PRONTO!         ║");
    console.log("║   Gracias por usar mi app    ║");
    console.log("╚══════════════════════════════╝");
    focus = false;
  } else {
    console.log("Escoge una opcion valida.");
  }
}

function saveToBD(tarea: Task): Promise<void> {
  return new Promise<void>((tareaGuardada) => {
    console.log(" ");
    console.log(`Cargando tarea........`);
    setTimeout(() => {
      console.log(`la tarea: "${tarea.title}" fue guardada exitosamente.`);
      tareaGuardada(); //indica a la promesa que ya termino y que puedes continuar...
    }, 2000);
  });
}

rl.close();
