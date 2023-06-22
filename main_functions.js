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

// function logParameters(parameter1, parameter2){
//     console.log('parametro 1', parameter1);
//     console.log('parametro 2', parameter2);
// }

// logParameters('pippo', 5);             // con questa funzione viene passato il parametro 1 (pippo) e con la seconda riga il parametro 2 (5)

// logParameters(27);                   // non siamo obbligati a passare entrambi i parametri

// logParameters();                   // se non diamo entrambi i parametri in console uscirà undefined sia per parametro 1 che per parametro 2


// function pow(base, exponent){
//     if (exponent !== undefined) {                    // funzione con default
//         const result = base ** exponent;            // con questa funzione se ci sono entrambi i parametri la funzione funziona normalmente,
//         return result;                             // se invece non abbiamo entrambi i parametri esegue l'else e la funzione ritornerà 4 alla seconda
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }

// const pippo = pow(4, 4);

// console.log(pippo);

// const pluto = pow(4);

// console.log(pluto);




// VALORI DI DEFAULT -----------------------------------------


// function pow(base, exponent = 2) {                  // questa sintassi dice, se hai entrambi ignora =2, se l'esponente non c'è fai =2
//     const result = base ** exponent;
//     return result;
// }

// console.log(pow(5, 3));       // con i valori di default in questo caso in console uscirebbe 125
// console.log(pow(5));          // in questo caso invece mancando l'esponente prende =2 e in console esce 25



// const startingString = '25';                    // funzione pars int, che è una conversione interna a cui se passo una stringa la trasforma in numero

// const startingNumber = parseInt(startingString);

// console.log(startingString, typeof startingString);


// console.log(startingNumber, typeof startingNumber);




// esercizio 1: definire una funzione 'pow' che non faccia uso dell'operatore '**' nè della libreria Math

// esercizio 2: definire una funzione 'correctCase' che prende in input una stringa e la restituisce trasformando la prima lettera in maiuscolo 
// esempio : 'la casa blu' => 'La casa blu'

// esercizio 3: definire una funzione 'min' che dati due numeri restituisca il minore 

// esercizio 4: definire una funzione 'clamp' che prende come parametri 
// tre numeri: valore, massimo e minimo. 
// Se valore è minore di minimo, restituisce minimo
// se valore è maggiore di massimo, restituisce massimo
// altrimenti restituisce valore

// esempio valore=12, minimo=20, massimo=100 => 20
// valore=5, minimo=0, massimo=3 => 3
// valore=10, minimo=1, massimo=100 => 10

// esercizio 5: definire una funzione chessboard che prende come parametro 'size' e stampa la scacchiera (convertire codice chessboard che abbiamo in una funzione)

// esercizio 6: definire una funzione 'ellipse' che prende come parametro una stringa
// se la stringa è minore di 20 caratteri la ritorna non modificata
// altrimenti la taglia a caratteri e aggiunge 3 puntini
// esempio: 'ciamo mamma!' => 'ciao mamma!'
// 'nel mezzo del camin di nostra vita' => 'nel mezzo del cammin...'

// esercizio 7: definire una funzione reverseString che data una stringa la restituisca al contrario
// esempio: 'casa rosa' => 'asor asac'

