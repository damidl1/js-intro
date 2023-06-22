// function square( specialNumber ) {
//     const result = specialNumber * specialNumber;
//     return result;                                         //  quello che voglio che esca fuori dalla funzione deve essere ritornato con return, senza uscirebbe undefined
// }


// const pippo = square(16);

// console.log(pippo);


// function logUppercase(stringToLog) {
//     const uppercaseString = stringToLog.toUpperCase();
//     console.log(uppercaseString);                                     
// }


// logUppercase('viva le funzioni!');


//  function gentleAlert() {                                         // funzione senza parametro
//     alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare')
//  }     
 
//  gentleAlert();

 
 
//  function logMultipleTimes(stringToLog, times){
//     for (let i = 0;  i < times; i++) {
//         console.log(stringToLog)
        
//     }
//  }

//  logMultipleTimes('pizza', 100);






//  function isEven(number) {                              //   funzione per dire se è pari o dispari
//     if (number % 2 === 0) {
//        return true;
//     } else {
//         return false;
//     }
//  }
 
//  const pluto = isEven(27);
//  console.log(pluto);


 
 
//  function pow(base, exponent) {                        //  funzione per calcolare una potenza
//     const result = base ** exponent;
//     return result;
//  }

//  const paperino = pow(2, 10);
//  console.log(paperino);



//  function lastCharUpperCase(selectedString) {                    // funzione per prendere l'ultimo carattere di una stringa e renderlo maiuscolo
//     const char = selectedString[selectedString.length -1];
//     const charUpperCase = char.toUpperCase();
//     return charUpperCase;
//  }

// const gastone = lastCharUpperCase('genova');

// console.log(gastone);




// SINTASSI ALTERNATIVE DELLE FUNZIONI --------------------------------------------
 
// function square(number) {                             // sintassi standard
//   const result = number * number;
//   return result;
// }

// console.log(square(3));

// const square2 = function (number) {                   // anonymous function
//   const result = number * number;
//   return result;
// };

// console.log(square2(10));

// const square3 = (number) => {                          // lambda function o arrow function
//   const result = number * number;
//   return result;
// };

// console.log(square3(4));


//  function square(number) {                            
//   return number * number; // questa espressione è identica a quella standard 
// }

//  console.log(square(3));


//  const square4 = number => number * number;      // funzione corta, quando si può eseguire in una linea di codice si può usare la lambda function, 
//                                                 //  quando si ha un unico parametro in ingresso non sono neanche obbligato a mettere le tonde
 
//  const pow = (base, exponent)  => base ** exponent;     // se invece si hanno più parametri le parentesi sono obbligatorie
 
//  console.log(square4(8));

//  console.log(pow(4, 3));          //questo significa 4 x 4 x 4 = 64



// PARAMETRI DELLE FUNZIONI -----------------------------------------

function logParameters(parameter1, parameter2){
    console.log('parametro 1', parameter1);
    console.log('parametro 2', parameter2);
}

logParameters('pippo', 5);             // con questa funzione viene passato il parametro 1 (pippo) e con la seconda riga il parametro 2 (5)

logParameters(27);                   // non siamo obbligati a passare entrambi i parametri

logParameters();                   // se non diamo entrambi i parametri in console uscirà undefined sia per parametro 1 che per parametro 2


function pow(base, exponent){
    if (exponent !== undefined) {                    // funzione con default
        const result = base ** exponent;            // con questa funzione se ci sono entrambi i parametri la funzione funziona normalmente,
        return result;                             // se invece non abbiamo entrambi i parametri esegue l'else e la funzione ritornerà 4 alla seconda
    } else {
        const result2 = base ** 2;
        return result2;
    }
}

const pippo = pow(4, 4);

console.log(pippo);

const pluto = pow(4);

console.log(pluto);


