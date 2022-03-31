
let numero1 = prompt("Inserisci il numero n1");

let numero2 = prompt("Inserisci il numero n2");

let numero3 = prompt("Inserisci il numero n3");

let numero4 = prompt("Inserisci il numero n4");

let numero5 = prompt("Inserisci il numero n5");

let numero6 = prompt("Inserisci il numero n6");

numeriSelezionati = [];

numeriSelezionati.push(numero1, numero2, numero3, numero4, numero5, numero6);

let dispari = numeriSelezionati.filter(n => n % 2)

console.log(dispari)