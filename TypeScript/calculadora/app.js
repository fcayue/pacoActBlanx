// Instal·lació: npm install -g typescript
// Para compilar: tsc app.ts (compila el codi .ts a .js)
// WATCH:
// tsc -w app.ts // --> mira qualsevol canvi en aquest fitxer i compila automàticament
var varible;
var s;
var isTrue;
var array;
var array2;
array2 = [1, "hola", true];
// Functions
function sum(a, b) {
    return a + b;
}
var sum2 = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getNom(nom, cognom) {
    if (cognom === undefined) {
        return nom;
    }
    return "Em dic: " + nom + " " + cognom;
}
console.log(getNom("Paco", "Cayuela"));
function mostrarToDo(todo) {
    console.log("Titol: ", todo.title);
    console.log("Text:  ", todo.text);
}
var todo = { title: "Calculador", text: "Primer programa a desenvolupar" };
mostrarToDo(todo);
