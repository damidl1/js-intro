// HIGHER ORDER FUNCTIONS ----------------------------

// MAPPING 

// function addOneToArray(arrayOfNumbers) {
    
//      let tempArray = [];

//      for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];

//         const newElement = element + 1;

//         tempArray.push(newElement);
        
//      }
   
//      return tempArray;
// }

// console.log(addOneToArray([3, 7, 0]));





// function divideByTwoArray(arrayOfNumbers) {
    
//     let tempArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//        const element = arrayOfNumbers[i];

//        const newElement = element / 2;

//        tempArray.push(newElement);
       
//     }
  
//     return tempArray;
// }

// console.log(divideByTwoArray([3, 7, 0]));




// FUNZIONE DI ALTO ORDINE CHE PUò GESTIRE TUTTE LE MAPPING FUNCTION ------------------------



// function map(array, transFunc) {              // transFunc funzione di trasformazione
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//        const element = array[i];

//        const newElement = transFunc(element);

//        tempArray.push(newElement);
       
//     }
//                                     // abbiamo creato transFunc e sotto abbiamo creato una funzione per fargli fare la somma perchè da solo transFunc non potrebbe fare niente
//     return tempArray;
// }

// function addOne(element) {                // qui abbiamo creato la funzione per sommare e creare newElement
//     const newElement = element + 1;
//     return newElement;
// }



// function divideByTwo(element) {               // qui abbiamo creato la funzione per dividere e creare newElement
//     const newElement = element / 2;
//     return newElement;
    
// }

// console.log(map([7, 10, 34], addOne));        // quando la funzione si usa come parametro non bisogna usare le tonde
// console.log(map([7, 10, 34], divideByTwo));






// const testArray = [12, 34, 5, 0, -23];


// function multiplyByTwo(element) {
//     const newElement = element * 2;
//     return newElement;
// }

// console.log(testArray.map(multiplyByTwo));    // la funzione map è già compresa dentro all'array, bisogna mettere .map che è una funzione di default di javascript
// console.log(testArray.map((element) => element * 2)); // funzione usando la lambda function che è identica alla funzione sopra







// const testArray2 = ['CIAO', 'qui', 'sticazzi', 'il sole splende vincitore'];


// function getStringLength(element){      // funzione normale più lunga che è uguale a quella con la lambda sotto
//     const length = element.length;
//     return length;
// }




// console.log(testArray2.map((element) => element.length));    // mapping function con lambda che prende ogni stringa in un array e restituisce la sua lunghezza


// console.log(testArray2.map(getStringLength));   






// funzione che dato testArray1 moltiplichi ognuno dei suoi elementi per il suo indice



// function multiplyByIndex(element, i, originalArray) {     // servono solo i primi due parametri ma originalArray serve anche per controllare gli altri elementi
//     const newElement = element * i;
//     return newElement;
// }

// console.log(testArray.map(multiplyByIndex));


// console.log(testArray.map((e, i) => e * i));  // stessa funzione sopra usando la lambda function, diciamo prendi e (element) e i (index) e fai e * i





// H-O FUNCTIONS FUNZIONI FILTER -----------------------------



// function removeNegative(array) {      // funzione che cicla tutti gli elementi e se un elemento soddisfa una condizione viene messo dentro l'array
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element >= 0) {        // unica cosa che cambia nelle filter function è la condizione, per il resto sono tutte uguali
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }

// console.log(removeNegative([0, 3, 5, -2, -5, 8]));      // in questa funzione quindi vengono rimossi tutti i numeri negativi





// function filter(array, filterFunc) {       //abbiamo definito come sopra nelle mapping una funzione di alto ordine
//     let tempArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         if (filterFunc(element)) {
//             tempArray.push(element);
//         }
        
//     }
//     return tempArray;

// }


// function isPositive(element){        // qui abbiamo definito la funzione da fargli fare
//     if (element >= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(filter([0, 3, 5, -2, -5, 8], isPositive));





// const testArray3 = [3, 5, 4, 8, 20, 21];


// vogliamo filtrare l'array tenendo solo i pari


// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(testArray3.filter(isEven));  // come per .map anche .filter è una funzione di js già presente per le funzioni filter
// console.log(testArray3.filter(element => element % 2 === 0)); // stessa funzione sopra ma con la lambda function




// funzione per tenere gli elementi dell'array che hanno indice pari


// function isIndexEven(element, index, originalArray) {
//     if (index % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(testArray3.filter(isIndexEven));  
// console.log(testArray3.filter((element, index) => index % 2 === 0));   // stessa funzione sopra ma con la lambda function




// REDUCE HIGHER ORDER FUNCTIONS ------------------------------------




function  sumAll(array) {
    
    let accumulator = 0;    // 0 perchè elemento neutro della somma è 0

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        
        accumulator = accumulator + current;
    }
   return accumulator;
}

console.log(sumAll([23, 4, 4, 6, 3]));



// funzione reduce di alto ordine



function reduce(array, reduceFunc, startingValue) {
    let accumulator = startingValue;    

    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        
        accumulator = reduceFunc(accumulator, current);
    }
   return accumulator;
}


function sum(accumulator, current){
    console.log('accumulator', accumulator);
    console.log('current', current)
    const newAccumulator = accumulator + current;    // qui fa quello che faceva nella funzione sopra accumulator = accumulator + current;
    return newAccumulator;
}
 

console.log(reduce([23, 4, 4, 6, 3], sum, 0));  // qui abbiamo passato la funzione sum e lo startingValue che è 0





const testArray4 = [4, 3, 2, 1];


// funzione per moltiplicare tutti i numeri dell'array tra loro



function multiply(acc, curr){      // acc = accumulator e curr = current
   const newAcc = acc * curr;
   return newAcc;
}


console.log(testArray4.reduce(multiply, 1));    // .reduce funzione già presente in js
console.log(testArray4.reduce((acc, curr) => acc * curr, 1));  // funzione come quella sopra con le lambda



// funzione per sommare tra loro solo le cifre a indice dispari del testArray4


function sumOnlyOddIndex(acc, curr, index, originalArray) {
    if (index % 2 !== 0){     // se index è dipari
    const newAcc = acc + curr;
    return newAcc;
    } else {
        return acc;
    } 
}

console.log(testArray4.reduce(sumOnlyOddIndex, 0));




function  sumAll2(array) {  // si potrebbe trovare una funzione di questo tipo senza starting value e la funzione inizia a contare dall'indice 1 dell'array
    
    let accumulator = array[0];    

    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        
        accumulator = accumulator + current;
    }
   return accumulator;
}

console.log(sumAll2([2, 3, 4]));    // facendo questo la funzione inizia a contare da 3 a cui somma 2 e poi somma 4
console.log(sumAll([2, 3, 4]));     

console.log(testArray4.reduce(sum));
console.log(testArray4.reduce(sum, 0));