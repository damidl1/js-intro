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
                                    // abbiamo creato transFunc e sotto abbiamo creato una funzione per fargli fare la somma perchè da solo transFunc non potrebbe fare niente
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




// function  sumAll(array) {
    
//     let accumulator = 0;    // 0 perchè elemento neutro della somma è 0

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = accumulator + current;
//     }
//    return accumulator;
// }

// console.log(sumAll([23, 4, 4, 6, 3]));



// funzione reduce di alto ordine



// function reduce(array, reduceFunc, startingValue) {
//     let accumulator = startingValue;    

//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = reduceFunc(accumulator, current);
//     }
//    return accumulator;
// }


// function sum(accumulator, current){
//     console.log('accumulator', accumulator);
//     console.log('current', current)
//     const newAccumulator = accumulator + current;    // qui fa quello che faceva nella funzione sopra accumulator = accumulator + current;
//     return newAccumulator;
// }
 

// console.log(reduce([23, 4, 4, 6, 3], sum, 0));  // qui abbiamo passato la funzione sum e lo startingValue che è 0





// const testArray4 = [4, 3, 2, 1];


// funzione per moltiplicare tutti i numeri dell'array tra loro



// function multiply(acc, curr){      // acc = accumulator e curr = current
//    const newAcc = acc * curr;
//    return newAcc;
// }


// console.log(testArray4.reduce(multiply, 1));    // .reduce funzione già presente in js
// console.log(testArray4.reduce((acc, curr) => acc * curr, 1));  // funzione come quella sopra con le lambda



// funzione per sommare tra loro solo le cifre a indice dispari del testArray4


// function sumOnlyOddIndex(acc, curr, index, originalArray) {
//     if (index % 2 !== 0){     // se index è dipari
//     const newAcc = acc + curr;
//     return newAcc;
//     } else {
//         return acc;
//     } 
// }

// console.log(testArray4.reduce(sumOnlyOddIndex, 0));




// function  sumAll2(array) {  // si potrebbe trovare una funzione di questo tipo senza starting value e la funzione inizia a contare dall'indice 1 dell'array
    
//     let accumulator = array[0];    

//     for (let i = 1; i < array.length; i++) {
//         const current = array[i];
        
//         accumulator = accumulator + current;
//     }
//    return accumulator;
// }

// console.log(sumAll2([2, 3, 4]));    // facendo questo la funzione inizia a contare da 3 a cui somma 2 e poi somma 4
// console.log(sumAll([2, 3, 4]));     

// console.log(testArray4.reduce(sum));
// console.log(testArray4.reduce(sum, 0));




// FUNZIONI CHE RESTITUISCONO FUNZIONI (da sapere ma utilizzo raro) ---------------------------


// function multiplyBy2(number) {
//     const result = number * 2;

//     return result;
// }

// function multiplyBy4(number) {
//     const result = number * 4;

//     return result;
// }



// console.log(multiplyBy2(3));
// console.log(multiplyBy4(3));




// function multiplyGenerator(multiplicator) { // questa funzione prende un moltiplicatore e fa una funzione che prende un numero e lo moltiplica per il moltiplicatore e ritorna il result
    
//     const multiplyFunction = function (number){
//         const result = number * multiplicator;
//         return result;
//     }

//     return multiplyFunction;
// }


// const multiplyBy5 = multiplyGenerator(5);  // multiply generator genera una nuova funzione che poi potrò usare, come ad esempio sotto che abbiamo generato multiplyBy5
// console.log(multiplyBy5(3));

// const multiplyBy10 = multiplyGenerator(10); // in questo caso abbiamo creato un multiply generator che moltiplica per 10
// console.log(multiplyBy10(3));

// console.log(multiplyGenerator (100)(3)); // qui invece abbiamo invocato la funzione passando subito il parametro





// function prefix(prefixStr) {  // funzione come quelle sopra ma usando le lambda che genera delle funzioni che generano il prefisso di un num di telefono
//     return (str) => prefixStr + ' ' + str;
// }

// const itaPrefix = prefix ('+39');
// console.log(itaPrefix('3339917218'));




// stessa funzione di quella sopra con le lambda ma in versione con più passaggi

// function prefix(prefixStr) {
//     const prefixFunction = (str) => prefixStr + ' ' + str;
//     return prefixFunction;
// }


// const frPrefix = prefix('+33');
// console.log(frPrefix('3339917218'));





// ESERCIZI-------------------------------------------------

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// 1) mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno


// function minusOne(element) {
//     const newElement = element - 1;
//     return newElement;
// }

// console.log(numbersArray.map(minusOne));

// console.log(numbersArray.map(element => element - 1));

// versione più corta esercizio 1 



// function minusOne(element) {
//    return element -1;
// }

// console.log(numbersArray.map(minusOne));

// console.log(numbersArray.map(element => element - 1));





// 2) mapping function che prende in input un array di numeri
// e restituisce un array con i il valore assoluto dei numeri

// function absValue(element) {
//     const newElement = Math.abs(element);
//     return newElement;
// }

// console.log(numbersArray.map(absValue));

// console.log(numbersArray.map(element => Math.abs(element)));

// console.log(absoluteAll(numbersArray));

// versione più corta esercizio 2



// function abs(element) {
//     return Math.abs(element);
//  }
 
//  console.log(numbersArray.map(abs));
 
//  console.log(numbersArray.map(element => Math.abs(element)));
 







// 3) mapping function che prende in input un array di numeri
//    e restituisce un array di strighe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari



// function evenOrOdd(element) {
//     const newElement = element;
//     return newElement;
// }

// versione più corta esercizio 3

// function toPariOrDispari(element) {
//     if (element % 2 === 0) {
//         return 'pari';
//      }
//         return 'dispari';
   
// }

// console.log(numbersArray.map(toPariOrDispari));

// console.log(numbersArray.map(element => element % 2 === 0 ? 'pari' : 'dispari'));






// 4) mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole

// function toLowerCaseAll(element) {
//         const newElement = element.toLowerCase();
//         return newElement;
//     }    
//     console.log(stringsArray.map(toLowerCaseAll));
    
//     console.log(stringsArray.map(element => element.toLowerCase()));



// versione più corta esercizio 4


// function toLower(element) {
//     return element.toLowerCase();
// }



// console.log(stringsArray.map(toLower));

// console.log(stringsArray.map(element => element.toLowerCase()));








// 5) mapping function che prende in input un array di strighe
//    e restituisce un array di numeri con le lunghezze delle stringhe



// function countLength(element) {
//     return element.length;
// }



// console.log(stringsArray.map(countLength));

// console.log(stringsArray.map(element => element.length));









// 6) filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri

// function removeShorterThan3Chars(string) {
//     if (string.length > 3) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(stringsArray.filter(removeShorterThan3Chars));

// console.log(stringsArray.filter(string => string.length > 3));





// versione più corta


// function containsLetterP(element) {
//     if (element.length > 3){
//         return true;
//     }
//     return false;
// }



// console.log(stringsArray.filter(containsLetterP));

// console.log(stringsArray.filter(element => element.length > 3));




// 7) filter function che prende in input un array di strighe
//    e restituisce solo quelle che contengono la lettera 'p'

// function removePEnemies(string){
// if (string.toLowerCase().includes('p')) {
//     return true
//     } else {
//         return false
//     }
// }
// console.log(stringsArray.filter(removePEnemies));





// versione più corta


// function containsLetterP(element) {
//     if (element.toLowerCase().includes('p')){
//         return true;
//     }
//     return false;
// }



// console.log(stringsArray.filter(containsLetterP));

// console.log(stringsArray.filter(element => element.toLowerCase().includes('p')));






// 8) filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3

// function keepPositiveAndDivisibleBy3(element){
//     if (element % 3 === 0) {
//         return true
//         } else {
//             return false
//         }
//     }
//     console.log(numbersArray.filter(keepPositiveAndDivisibleBy3)); 
    


// versione più corta




// function isPositiveAndDivisibleBy3(element) {
//  if (element >= 0 && element % 3 === 0) {
//     return true;
//  }
//  return false;
// }



// console.log(numbersArray.filter(isPositiveAndDivisibleBy3));

// console.log(numbersArray.filter(element => element >= 0 && element % 3 === 0));

// QUALSIASI FUNZIONE DI FILTER DEVE SEMPRE RITORNARE UN TRUE O FALSE




//10) reduce function che dato un array di stringhe somma tutte le lunghezze 



// function sumLength(acc, curr) {
//    return acc += curr.length;
//  }
    
   
   
   
   
//    console.log(stringsArray.reduce(sumLength, 0));
   
//    console.log(stringsArray.reduce((a, c) => a + c.length, 0));







   //11) reduce function che dato un array di stringhe somma le lunghezze delle ultime 3




//    function sumLengthIfLast3(acc, curr, index, originalArray) {
//      if (index >= originalArray.length - 3) {
//         return acc + curr.length;
//      }
//      return acc;   
//   }
     
    
    
    
    
//     console.log(stringsArray.reduce(sumLengthIfLast3, 0));
    
//     console.log(stringsArray.reduce((a, c, i, o) => i >= o.length - 3 ? a + c.length : a, 0));









// SORTING (METTERE IN ORDINE GLI ARRAY)-------------------------------------------------



let numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];


// stringsArray.sort();

// console.log(stringsArray);



// numbersArray.sort();

// console.log(numbersArray);



// sort è una funzione di alto ordine che può prendere un'altra funzione (comparing function)

// const newArray = numbersArray.sort();       // con sort perdiamo l'ordine precedente

// console.log('new', newArray);
// console.log('numbers', numbersArray);



// comparing function per ordinare i numeri in ordine ascendente

function compareAscendingNumbers(n1, n2) {         
    if (n1 < n2){
        return -1;
    } else if (n1 > n2){
        return +1;
    } else {
        return 0;
    }
}

numbersArray.sort(compareAscendingNumbers);

console.log(numbersArray);


// quando vogliamo che i due elementi mantengano lo stesso ordine si mette nel return -1 (un numero negativo)
// quando vogliamo che i due elementi cambino di posizione  si mette nel return +1 (un numero positivo)
// quando è indifferente si mette nel return 0





// comparing function per ordinare i numeri in ordine discendente


function compareDescendingNumbers(n1, n2) {         
    if (n1 < n2){
        return +1;
    } else if (n1 > n2){
        return -1;
    } else {
        return 0;
    }
}

numbersArray.sort(compareDescendingNumbers);






// comparazione tra numeri usando una proprietà matematica presente in javascript



function compareAscendingNumbers2(n1, n2) {
    return n1 - n2;        // se n1 è più grande di n2 la sottrazione darà un numero positivo
}





function compareDescendingNumbers2(n1, n2) {         
    return n2 - n1;         // se n2 è più piccolo di n2 la sottrazione darà un numero negativo
}


console.log(numbersArray);


numbersArray.sort(compareAscendingNumbers2);

numbersArray.sort(compareDescendingNumbers2);

numbersArray.sort((n1, n2) => n1 - n2);     // sintassi con lambda




stringsArray.sort((s1, s2) => s1.localeCompare(s2));  // locale compare è il metodo di comparazione delle stringhe, è locale perchè fa comparazione localizzata (dipende da che alfabeto e nazione siamo)

stringsArray.sort((s1, s2) => - s1.localeCompare(s2));  // per fare l'inverso del codice sopra bisogna mettere - prima di s1.localeCompare

console.log(stringsArray);