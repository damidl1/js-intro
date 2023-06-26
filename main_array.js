// ARRAY ------------------------------------------- 

// const pippo = ['pane', 'pasta', 'latte', 'caffe'];

// console.log(pippo);

// console.log(pippo.length);

// AGGIUNGERE E TOGLIERE ELEMENTI ALL'ARRAY -----------------------


// pippo.push('acqua');    // aggiungere elemento in coda


// pippo.unshift('biscotti');  // aggiungere elemento in cima alla lista


// const elementoCoda = pippo.pop();     // togliere elemento in coda

// console.log(elementoCoda);


// const elementoTesta = pippo.shift();   //togliere elemento in testa

// console.log(elementoTesta);




// CICLI ED ARRAY --------------------------------------



// const pluto = [1, 2, 23, -4, 345, 0];

// console.log(pluto[0]);

// console.log(pluto[2]);

// console.log(pluto[pluto.length -1]);           // per prendere ultimo elemento di un array qualsiasi esso sia

// for (let i = 0; i < pluto.length; i++) {
//     const element = pluto[i];
//     console.log(element);
    
// }


// for (const element of pluto) {             // fa la stessa cosa del for sopra, è una versione stringata
//     console.log(element);
// }


// let i = 0;

// while (i < pluto.length) {                 // si può usare anche il ciclo while ma è meglio usare il for
//     const element = pluto[i];
//     console.log(element);
//     i++;
// }


// const pluto = [1, 2, 23, -4, 345, 0];

// for (let i = pluto.length - 1; i >= 0; i--) {       // per ciclare un array al contrario
//     const element = pluto[i];
//     console.log(element);
// }




// TRASFORMAZIONI DI ARRAY -------------------------------------------------------------

// MAPPING  (moltiplicare tutti gli elementi per un numero)


// const paperino = [2, 5, -4, 2000, 7, 34];

// function multiplyArrayBy2(selectedArray) {

//     const newArray = [];
    
//     for (let i = 0; i < selectedArray.length; i++) {
      
//         const element = selectedArray[i];
//         const newElement = element * 2;
//         newArray.push(newElement);
//     }
//     return newArray;
// }

// console.log('multiply by 2', multiplyArrayBy2(paperino));

//  ---------------------------------------------


// function divideBy2ifEven(selectedArray) {               //dividere il numero nell'array solo se è pari
                                             
//   const newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];
//     let newElement;
//     if (element % 2 === 0) {
//       newElement = element / 2;
//     } else {
//       newElement = element;
//     }
//     newArray.push(newElement);
//   }
//   return newArray;
// }

// console.log('divide by 2 if even', divideBy2ifEven(paperino));

//  ------------------------------------------


// const paperone = ['qui', 'quo', 'qua'];


// function upperCaseAll(selectedArray) {                     // rendere tutte le stringhe maiuscole
//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
      
//         const element = selectedArray[i];
        
//         const newElement = element.toUpperCase();
     
//        newArray.push(newElement)
//       }
//     return newArray;
//   }

// console.log('UpperCaseAll', upperCaseAll(paperone));




// FILTERING (filtrare elementi di un array) ---------------------------------



 // const paperoga = [3, 5, 6, 9, 8, 111, -3, -8, 0];


// function removeEven(selectedArray) {                    // rimuove i numeri pari
  
//   const newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];

//     if (element % 2 !== 0) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }

//    console.log('remove even', removeEven(paperoga));



//  function removeNegative(selectedArray) {                    //rimuovere i negativi
//      const newArray = [];

//   for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];

//     if (element >= 0) {
//       newArray.push(element);
//     }
//    }
//    return newArray;
//  }

// console.log('remove negative', removeNegative(paperoga));




// FUNCTION COMPOSITION (funzione per mettere insieme una filtering e una mapping)
// abbiamo usato due funzioni che abbiamo creato prima


// const qui = [3, 5, 6, 9, 8, 111, -3, -8, 0, 20, -10000];

// function removeNegativeAndMultiplyBy2(selectedArray) {
 
//      const arrayWithoutNegative = removeNegative(selectedArray);
//      const arrayMultiplied = multiplyArrayBy2(arrayWithoutNegative);
  
//      return arrayMultiplied;

//     return multiplyArrayBy2(removeNegative(selectedArray));      // fa la stessa cosa del codice sopra
// }

// console.log(removeNegativeAndMultiplyBy2(qui));




// ESERCIZI ---------------------------------------------------------------

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


// 1) mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno

// 2) mapping function che prende in input un array di numeri
//    e restituisce un array con i il valore assoluto dei numeri

// 3) mapping function che prende in input un array di numeri
//    e restituisce un array di strighe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari

// 4) mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole

// 5) mapping function che prende in input un array di strighe
//    e restituisce un array di numeri con le lunghezze delle stringhe

// 6) mapping function che prende in input un array di strighe
//    e restituisce le stringhe in formato camelCase

// 7) filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri

// 8) filter function che prende in input un array di strighe
//    e restituisce solo quelle che contengono la lettera 'p'

// 9) filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3

// 10) fare una copia della home del sito di AXIA FORMAZIONE





// Svolgimento esercizio 1 mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];


// function decreaseArrayBy1(selectedArray) {
//   const newArray = [];
    
//   for (let i = 0; i < selectedArray.length; i++) {
    
//       const element = selectedArray[i];
//       const newElement = element - 1;
//       newArray.push(newElement);
//   }
//   return newArray;
// }
// console.log('decrease by 1', decreaseArrayBy1(numbersArray));




// Svolgimento esercizio 2 mapping function che prende in input un array di numeri
//    e restituisce un array con i il valore assoluto dei numeri


// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// function absoluteValuesArray(selectedArray) {
//   const newArray = [];
    
//   for (let i = 0; i < selectedArray.length; i++) {
    
//       const element = selectedArray[i];
//       const newElement = Math.abs(selectedArray[i]);
//       newArray.push(newElement);
//   }
//   return newArray;
// }
// console.log('absolute value', absoluteValuesArray(numbersArray));






// Svolgimento esercizio 3 mapping function che prende in input un array di numeri
//    e restituisce un array di strighe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari



// const evenOrOddArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];

// function evenOrOdd(evenOrOddArray) {
//     const newArray = [];
      
//     for (let i = 0; i < evenOrOddArray.length; i++) {
//       const number = evenOrOddArray[i];
//       if (number % 2 === 0) {
//         newArray.push('PARI');
//       } else {
//         newArray.push('DISPARI');
//       }
//     }
//     return newArray;
//   }
//   console.log('Even or odd:', evenOrOdd(evenOrOddArray));




// Svolgimento esercizio 4 mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole

  
//   const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];

  
//   function lowerCaseArray(stringsArray) {
//     const newArray = [];

//     for (let i = 0; i < stringsArray.length; i++) {
//       const lowercaseStrings = stringsArray[i].toLowerCase();
//       newArray.push(lowercaseStrings);
//     }
//     return newArray;
//   }
//   console.log("Lower Case Array:", lowerCaseArray(stringsArray));




    
   // Svolgimento esercizio 5 mapping function che prende in input un array di stringhe
  //    e restituisce un array di numeri con le lunghezze delle stringhe
  

//   const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


//     function checkArrayLength(stringsArray) {
//     const lengthsArray = [];

//     for (let i = 0; i < stringsArray.length; i++) {
      
//         const lengthOfArray = stringsArray[i].length;
//         lengthsArray.push(lengthOfArray);
    
//     }
//     return lengthsArray;
//   }
//   console.log("Check array length:", checkArrayLength(stringsArray));







// Svolgimento esercizio 6 mapping function che prende in input un array di strighe
//    e restituisce le stringhe in formato camelCase


// const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


// function toCamelCaseString(stringsArray) {
//     const ccString = [];

//     for (let i = 0; i < stringsArray.length; i++) {
//         const string = stringsArray[i];

//         const words = string.split(' ');

//         const firstWord = words.shift().toLowerCase();

//         let camelCaseWords = '';

//         for (let j = 0; j < words.length; j++) {
//             const word = words[j];

//             const camelCaseWord = word[0].toUpperCase() + word.slice(1);
//             camelCaseWords += camelCaseWord;
            
//         }
//         const camelCaseString = firstWord + camelCaseWords;

//         ccString.push(camelCaseString);
//     }
//     return ccString;
// }

// console.log('Camel case string: ', toCamelCaseString(stringsArray));


// Altra versione


const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


function toFirstCase(selectedWord) {          // prende la prima lettera e lo mette maiuscola, poi prende il resto della stringa con split e lo mette a fianco
    
    const firstChar = selectedWord[0];
    const firstCharUpper = firstChar.toUpperCase();
    const restOfTheString = selectedWord.slice(1);
    
    return firstCharUpper + restOfTheString;
}

function toCamelCase(selectedString) {
    
    const lowerString = selectedString.toLowerCase();      
    const wordsArray = lowerString.split(' ');

    if (wordsArray.length === 1) {
        return lowerString;
    }

    let camelString = '';
    for (let i = 0; i < wordsArray.length; i++) {
        const element = wordsArray[i];
        if (i === 0) {
           camelString += element; 
        } else {
            camelString += toFirstCase(element);
        }
        
    }
    return camelString;
}

function toCamelCaseAll(stringsArray) {
    const tempArray = [];

    for (let i = 0; i < stringsArray.length; i++) {
       
        const element = stringsArray[i];
        const newElement = toCamelCase(element);

        tempArray.push(newElement);
        
    }

    return tempArray;
}

console.log(toCamelCaseAll(stringsArray));


// Svolgimento esercizio 7 filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri




// const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


// function filterStringsByLength(stringsArray) {
//   const filteredArray = [];

//   for (let i = 0; i < stringsArray.length; i++) {
//     const string = stringsArray[i];
//     if (string.length > 3) {
//       filteredArray.push(string);
//     }
//   }
//   return filteredArray;
// }
// console.log("Filtered Array: ", filterStringsByLength(stringsArray));






// Svolgimento esercizio 8 filter function che prende in input un array di stringhe
//    e restituisce solo quelle che contengono la lettera 'p'



// const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


// function filterStringsByLetterP(stringsArray) {
//   const filteredArray = [];

//   for (let i = 0; i < stringsArray.length; i++) {
//     const pString = stringsArray[i];
//     if (pString.includes('p') || pString.includes('P')) {
//       filteredArray.push(pString);
//     }
//   }
//   return filteredArray;
// }
// console.log("Filtered Array: ", filterStringsByLetterP(stringsArray));



// Versione migliorata


// function filterStringsByLetterP(stringsArray) {
//   const filteredArray = [];

//   for (let i = 0; i < stringsArray.length; i++) {
//     const pString = stringsArray[i];
    
//     if (pString.toLowerCase().includes('p')) {
//       filteredArray.push(pString);
//     }
//   }
//   return filteredArray;
// }
// console.log("Filtered Array: ", filterStringsByLetterP(stringsArray));





// Svolgimento esercizio 9 filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3



// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];


// function positivesDividedBy3(numbersArray) {
//     const filteredArray = [];
  
//     for (let i = 0; i < numbersArray.length; i++) {
//       const number = numbersArray[i];
      
//       if (number > 0 && number % 3 === 0) {
//         filteredArray.push(number);
//       }
//     }
//     return filteredArray;
//   }
//   console.log("Filtered Array: ", positivesDividedBy3(numbersArray));