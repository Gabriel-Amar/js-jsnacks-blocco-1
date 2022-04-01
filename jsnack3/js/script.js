let numero = prompt("Inserisci un numero di quattro cifre");

const miaArray = numero.split("");

console.log(miaArray);

let risultato = miaArray[0] + miaArray[1]+ miaArray[2]+ miaArray[3];

console.log(risultato)

let somma = 0;

let index = 0;

while (index < risultato.length){
    console.log("index: ", index)
    console.log("conta numero: ", risultato[index]);
    somma += parseInt(risultato[index])
    console.log("somma ", somma);
    index++
}
