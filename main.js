//FASE 1: Inicialización y Primera Línea 

console.log("Iniciando laboratorio...");

// FASE 2: Variables y Literales Primitivos 
let edad = 20;
let esEstudiante = true;

console.log("Edad:", edad);
console.log("Tipo de edad:", typeof edad);

console.log("Es estudiante:", esEstudiante);
console.log("Tipo de esEstudiante:", typeof esEstudiante);

// FASE 3: Literales de Cadena y Plantillas 
let nombre = "Deysi";
let saludo = `Hola ${nombre}, tienes ${edad} años.`;
console.log(saludo);

let mensaje = `
Bienvenida al laboratorio.
Estamos aprendiendo JavaScript.
Las plantillas respetan los saltos de línea.
`;

console.log(mensaje);

// FASE 4: Control de Flujo con Literales 
let sabor = "chocolate";

if (sabor === "chocolate") {
    console.log("Te gusta el chocolate.");
} else {
    console.log("Prefieres otro sabor.");
}

// PASO 5 - switch
let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Elegiste la opción 1");
        break;

    case 2:
        console.log("Elegiste la opción 2");
        break;

    case 3:
        console.log("Elegiste la opción 3");
        break;

    default:
        console.log("Opción no válida");
}
// FASE 5: Bucles e Iteración 
for (let i = 1; i < 10; i++) {
    console.log(`Iteración número: ${i}`);
}
