function square( specialNumber ) {
    const result = specialNumber * specialNumber;
    return result;                                         //  quello che voglio che esca fuori dalla funzione deve essere ritornato con return, senza uscirebbe undefined
}


const pippo = square(16);

console.log(pippo);


function logUppercase(stringToLog) {
    const uppercaseString = stringToLog.toUpperCase();
    console.log(uppercaseString);                                     
}


logUppercase('viva le funzioni!');


 function gentleAlert() {                                         // funzione senza parametro
    alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare')
 }     
 
 gentleAlert();

 
 
 function logMultipleTimes(stringToLog, times){
    for (let i = 0;  i < times; i++) {
        console.log(stringToLog)
        
    }
 }

 logMultipleTimes('pizza', 100);






 function isEven(number) {                              //   funzione per dire se è pari o dispari
    if (number % 2 === 0) {
       return true;
    } else {
        return false;
    }
 }
 
 const pluto = isEven(27);
 console.log(pluto);


 
 
 function pow(base, exponent) {                        //  funzione per calcolare una potenza
    const result = base ** exponent;
    return result;
 }

 const paperino = pow(2, 10);
 console.log(paperino);



 function lastCharUpperCase(selectedString) {                    // funzione per prendere l'ultimo carattere di una stringa e renderlo maiuscolo
    const char = selectedString[selectedString.length -1];
    const charUpperCase = char.toUpperCase();
    return charUpperCase;
 }

const gastone = lastCharUpperCase('genova');

console.log(gastone);


 