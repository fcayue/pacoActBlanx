// utilitzen l'extensió de fitxer .ts
// Typescript és un 'superset' de Javascript
// Typescript és una versió estructurada de Javascript
// Està dissenyat principalment per a aplicacions grans
// És fàcil integrar-lo a una aplicació web en javascript
// El codi .ts finalment és convertit a .js (concepte de transpilació)
// Instal·lació: npm install -g typescript
// Para compilar: tsc app.ts (compila el codi .ts a .js)
// WATCH:
// tsc -w appt.ts // --> mira qualsevol canvi en aquest fitxer i compila automàticament
// la gran avantatge de typescript és que el codi es pot comprovar, és més llegible i més segur, i els errors es mostren directament en el editor.
// types
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
