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
                                                   //  quando si ha un unico parametro in ingresso non sono neanche obbligato a mettere le tonde
 
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



// SVOLGIMENTO ESERCIZI --------------------------------

// 1)  



// function pow(number){
//     for (let i = 0; = i < number; i++) {
//         if () 
//         {

//         }
        
//     }
// }

// const result = 


// 2)

// function correctCase(selectedString) {
//     const char = selectedString[0];
//     let upperCaseChar = char.toUpperCase(selectedString);
//     return upperCaseChar;
// }

// const upperChar = correctCase('viva gli esercizi su javascript');
// console.log(upperChar);


// function correctCase(selectedString) {
//     const char = selectedString[0]; 
//     const upperChar = correctCase('viva gli esercizi su javascript');
//     let upperCaseChar = char.toUpperCase(selectedString);
//     return upperCaseChar;
// }
// console.log(upperChar);


// function correctCase(selectedString) {
//     const firstChar = selectedString[0];
//     const restOfString = selectedString.slice(1);
//     const upperCaseChar = firstChar.toUpperCase();
//     return upperCaseChar + restOfString;
//   }
  
//   const inputString = 'viva gli esercizi su javascript';
//   const correctedString = correctCase(inputString);
//   console.log(correctedString);
  

// alternativa scritta in aula

function correctCase(selectedString) {
  if (selectedString === undefined) {
    return "";
  }

  const firstChar = selectedString[0];
  const firstCharUpper = firstChar.toUpperCase();
  const restOfTheString = selectedString.slice(1);
  const newString = firstCharUpper + restOfTheString;

  return newString;
}

console.log('correct case', correctCase('viva pippo'));




//   4)

// function clamp(value, min, max) {
//   if (value < min) {
//     return min;
//   } else if (value > max) {
//     return max;
//   } else {
//     return value;
//   }
// }

// alternativa identica al codice sopra


function clamp(value, min, max){
  if (value < min){
    return min;
  }

  if (value > max){
    return max;
  }
  return value;
}

console.log('clamp', clamp(1, 5, 15));
console.log('clamp', clamp(12, 3, 10));
console.log('clamp', clamp(12, 1, 100));


// 6)


// function ellipse(string) {
//   const maxLength = 22;
//   if (string.length < maxLength) {
//     return string;
//   } else {
//     const stringDotted = string.slice(0, maxLength - 3) + "...";
//     return stringDotted;
//   }
// }

// const inputString2 = 'imparare a programmare';
// const shortString = ellipse(inputString2);
// console.log(shortString);


// alternativa scritta in aula


function ellipse(selectedString){
  if (selectedString.length < 20) {
    return selectedString;
  } else {
    
    const shortString = selectedString.slice(0, 20);
    const ellipsedString = shortString + '...' 
    return ellipsedString;
  }
   
  
}

console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita'));


// alternativa per dire dopo quanti caratteri tagliare


function ellipse(selectedString, size = 20, endString = '...'){             // ... default se non passo altri parametri ma se metto *** passa ***
  if (selectedString.length < size) {
    return selectedString;
  } else {
    
    const shortString = selectedString.slice(0, size);
    const ellipsedString = shortString + endString; 
    return ellipsedString;
  }
   
  
}

console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita'));
console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita', 3));
console.log('ellipse', ellipse('nel mezzo del cammin di nostra vita', 10, '***'));



// 3)


function min( firstNumber, secondNumber ) {
  if ( firstNumber > secondNumber ) {
    return secondNumber;
  } else {
    return firstNumber;
  }
}

console.log('min', min(5,10));


 // sintassi alternativa a quella sopra con operatore ternario


function min( firstNumber, secondNumber ) {                
const minimum = firstNumber > secondNumber ? secondNumber : firstNumber;  // vuol dire: se questa condizione è vera dentro minimum ci va secondNumber, se è falsa ci va firstNumber
return minimum;
}

console.log('min', min(5,10));


//altra sintassi uguale a questa sopra ancora più corta


function min( firstNumber, secondNumber ) {                
  return firstNumber > secondNumber ? secondNumber : firstNumber;  
}
  
console.log('min', min(5,10));



// 5)


function chessBoard(size) {
 
  let chessboardString = '';
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i - j) % 2 === 0) {
        chessboardString = chessboardString + "□";
      }
      if ((i - j) % 2 !== 0) {
        chessboardString = chessboardString + "■";
      }
    }
    chessboardString = chessboardString + "\n";
  }

  return chessboardString;
}

console.log('chessboard', chessBoard(19));


// 7)


function stringReverse(selectedString) {
  
  let newString = '';     // questa variabile è un accumulator, serve per fare da contenitore per metterci come in questo esempio i caratteri

  for (let i = selectedString.length - 1; i >= 0; i--) {
    const char = selectedString[i];
    newString = newString + char;      // si può anche scrivere newString += char;
  }
  return newString;
}

console.log('reverse', stringReverse('la casa rosa'));



// 1)


function pow(base, exponent){

  let result = 1;    // facendo questo la moltiplicazione della potenza sarebbe 1 * 5 * 5 * 5 * 5

    for (let i = 0; i < exponent; i++) {
      result = result * base;
    }
  return result;
}

console.log('pow', pow(5, 4));

