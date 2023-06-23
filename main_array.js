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

function multiplyArrayBy2(selectedArray) {

    const newArray = [];
    
    for (let i = 0; i < selectedArray.length; i++) {
      
        const element = selectedArray[i];
        const newElement = element * 2;
        newArray.push(newElement);
    }
    return newArray;
}

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



 function removeNegative(selectedArray) {                    //rimuovere i negativi
     const newArray = [];

  for (let i = 0; i < selectedArray.length; i++) {
    const element = selectedArray[i];

    if (element >= 0) {
      newArray.push(element);
    }
   }
   return newArray;
 }

// console.log('remove negative', removeNegative(paperoga));




// FUNCTION COMPOSITION (funzione per mettere insieme una filtering e una mapping)
// abbiamo usato due funzioni che abbiamo creato prima


const qui = [3, 5, 6, 9, 8, 111, -3, -8, 0, 20, -10000];

function removeNegativeAndMultiplyBy2(selectedArray) {
 
    // const arrayWithoutNegative = removeNegative(selectedArray);
    // const arrayMultiplied = multiplyArrayBy2(arrayWithoutNegative);
  
    // return arrayMultiplied;

    return multiplyArrayBy2(removeNegative(selectedArray));      // fa la stessa cosa del codice sopra
}

console.log(removeNegativeAndMultiplyBy2(qui));




// ESERCIZI ---------------------------------------------------------------

const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
const stringsArray = ['23', 'pippo', 'pluto', 'la casa blu', 'osvaldo', '', 'porchetta'];


// esercizio 1: mapping function che prende in input un array di numeri 
// e restituisce un array con tutti i numeri diminuiti di uno

// esercizio 2: mapping function che prende in input un array di numeri 
// e restituisce un array con il valore assoluto dei numeri

// esercizio 3: mapping function che prende in input un array di numeri 
// e restituisce un array di stringhe con scritto 'PARI' se il numero corrispondente è pari
// o 'DISPARI' se il numero corrispondente è dispari










