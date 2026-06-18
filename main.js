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
let saludo = Hola ${nombre}, tienes ${edad} años.;
console.log(saludo);

let mensaje = `
Bienvenida al laboratorio.
Estamos aprendiendo JavaScript.
Las plantillas respetan los saltos de línea.
`;

console.log(mensaje);
