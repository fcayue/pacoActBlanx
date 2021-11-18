// Instal·lació: npm install -g typescript
// Para compilar: tsc app.ts (compila el codi .ts a .js)
// WATCH:
// tsc -w app.ts // --> mira qualsevol canvi en aquest fitxer i compila automàticament

let varible: number;
let s: string;
let isTrue: boolean;
let array: number[];
let array2: Array<any>;
array2 = [1, "hola", true];

// Functions
function sum(a: number, b: number): number {
  return a + b;
}

let sum2 = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

function getNom(nom: string, cognom?: string): string {
  if (cognom === undefined) {
    return nom;
  }
  return `Em dic: ${nom} ${cognom}`;
}

console.log(getNom("Paco", "Cayuela"));

// Interfaces
interface toDo {
  title: string;
  text: string;
}

function mostrarToDo(todo: toDo) {
  console.log("Titol: ",todo.title);
  console.log("Text:  ",todo.text);
}

let todo: toDo = { title: "Calculador", text: "Primer programa a desenvolupar" };
mostrarToDo(todo);