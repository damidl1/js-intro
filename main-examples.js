// Scrivere una funzione che dato un array di numeri                   // scaricare turbo log extension
// li eleva al quadrato e rimuove i negativi


// const testArray = [2, -12, 0, 27, 4, -3, 12, 1, -1];


// function squareAllAndRemoveNegatives(arr) {   // mapping e filter // sempre meglio fare prima la filter se possibile
//     const onlyPositiveArray = arr.filter( el => el >= 0 );  //operazione di filtraggio
   
//     const squaredArray = onlyPositiveArray.map( el => el ** 2 );  // elevazione di el al quadrato con **
    
//     return squaredArray;
// }


// console.log(squareAllAndRemoveNegatives(testArray));



//  versione 2

// function squareAllAndRemoveNegatives2(arr) {   
//     return arr.filter( el => el >= 0 )
//                     .map( el => el ** 2 );   // lancia filter e poi sull'array che esce fuori lancia map
// }

// console.log(squareAllAndRemoveNegatives2(testArray));


// ogni volta che invochiamo queste funzioni cicliamo l'array




// versione 3


// function squareAllAndRemoveNegatives3(arr) {    // usiamo il template della reduce che funziona per tutto
//     const accumulator = [];

//     for (const number of arr) {        // usiamo il for of per scrivere una cosa veloce senza mettere la i, equivalente del for normale
       
//         if ( number >= 0) {  // prima il filtraggio
//           const newNumber = number ** 2;
//           accumulator.push(newNumber);
//     }
// }
//     return accumulator;
// }

// console.log(squareAllAndRemoveNegatives3(testArray));




// versione 4



// function squareAllAndRemoveNegatives4(arr) {    // usiamo il template della reduce che funziona per tutto
//      return arr.reduce((acc, curr) => {
//         if ( curr >= 0) {
//             const newNumber = curr ** 2;
//             acc.push(newNumber);
//         }
//         return acc;
//      }, []);           // si mettono le quadre qui per inizializzare l'array vuoto per inserire dentro i valori

     // return arr.reduce((a, c) => c >= 0 ? [...a, c ** 2] : a, []);  stessa funzione sopra ma in una linea (meglio usare quella sopra)

// }

// console.log(squareAllAndRemoveNegatives4(testArray));





// Scrivere una funzione che dato un array di numeri 
// somma tutti quelli divisibili per 3


// function summAllDivisibleByThree1(arr) {
    
//     const divisibleBy3Array = arr.filter( el => el % 3 === 0 );
//     const sum = divisibleBy3Array.reduce(( acc, curr ) => acc + curr , 0);
    
//     return sum;
// }

// console.log(summAllDivisibleByThree1(testArray));



// versione 2




// function summAllDivisibleByThree2(arr) {
    
//    return arr.filter( el => el % 3 === 0 )    
//              .reduce(( acc, curr ) => acc + curr, 0);      // lo 0 qui sarebbe lo starting value
// }

// console.log(summAllDivisibleByThree2(testArray));



// versione 3



// function summAllDivisibleByThree3(arr) {
    
//     let accumulator = 0;

//     for (const number of arr) {
//         if (number % 3 === 0) {
//             accumulator = accumulator + number;
//         }
//     }
//     return accumulator;
//  }
 
//  console.log(summAllDivisibleByThree3(testArray));
 


 // versione 4



//  function summAllDivisibleByThree4(arr) {
   
//     return arr.reduce((acc, curr) => {
//      if ( curr % 3 === 0 ) {
//        acc = acc + curr;
//      }
//      return acc;
//    }, 0);
//  }

//  console.log(summAllDivisibleByThree4(testArray));




 // data una stringa di elementi separati da virgole
 // convertire gli elementi in numeri
 // togliere quelli che non sono numeri
 // e sommare i numeri tra loro


//  const testString = '2000,10,pippo,345,-234,ciambella,2,,'


//  function convertToNumbersAndSummAll(str) {
//    const stringArray = str.split(","); // prima cosa trasformare la stringa in un array
//    const numbersArray = stringArray.map((el) => parseFloat(el)); // seconda cosa trasformare l'array di stringhe in un array di numeri con mapping,parseFloat uno dei modi per convertire
//    function isANumber(element) {
//      if (isNaN(element)) {
       // per rimuovere i NaN facciamo una filter e usiamo il metodo isNaN per verificare i NaN
//        return false;
//      } else {
//        return true;
//      }
//    }
//    const onlyNumbersArray = numbersArray.filter(isANumber);

   // const onlyNumbersArray = numbersArray.filter(el => !isNaN(el));  // stessa funzione sopra ma su una linea

//    const sum = onlyNumbersArray.reduce((acc, curr) => acc + curr, 0);
//    return sum;
//  }

//  console.log(convertToNumbersAndSummAll(testString));


 
 
 // versione 2



// function convertToNumbersAndSummAll2(str) {
//    return str.split(",")
//           .map(el => parseFloat(el))
//           .filter(el => !isNaN(el))
//           .reduce((acc, curr) => acc + curr, 0);
   
//  }

//  console.log(convertToNumbersAndSummAll2(testString));




 // versione 3


//  function convertToNumbersAndSummAll3(str) {
    
//     const stringArray = str.split(',');

//     let accumulator = 0;

//     for (const str of stringArray) {    
//         const number = parseFloat(str);
//         if (!isNaN(number)) {
//             accumulator = accumulator + number;   // reduce
//         }   
//     }
//     return accumulator;    
//  }
 
//   console.log(convertToNumbersAndSummAll3(testString));


  
  
  // versione 4



//   function convertToNumbersAndSummAll4(str) {
    
//     return str.split(',').reduce((acc, curr) => {
//         const number = parseFloat(curr);  // map
//         if (!isNaN(number)) {  // filter
//             acc = acc + number;  // reduce
//         }
//         return acc;
//     }, 0);
   
//  }
 
//   console.log(convertToNumbersAndSummAll4(testString));


  // 1) Dato un array di stringhe,
  //    eliminare tutte quelle che contengono la lettera p
  //    e ritornare la somma delle lunghezze rimanenti

    // const test1 = ['pippo', 'pluto', 'qui', 'quo', 'qua', 'paperone']

  // 2) Dato un array di numeri, moltiplicarli per il loro indice
  //    rimuovere queli maggiori di 1000
  //    e restituirli in formato stringa, separati da punto e virgola

    // const test2 = [100, 10, 24, -20, 300, 6, 100, 300];

  // 3) Data una stringa, eliminare tutte le parole più corte di 4 caratteri
  //    e restituirle in un array ordinate per lunghezza dalla più lunga

    // const test3 = 'ho fatto il bucato ieri sera ma si è colorato tutto di violetto';







    // function removePAndSumLenght(arr) {   // mapping e filter // sempre meglio fare prima la filter se possibile
    //     const removeP = arr.filter( el => el.includes('p'));
    //     console.log("🚀 ~ file: main-examples.js:267 ~ removePAndSumLenght ~ removeP:", removeP)
    //     const wordsLength = removeP.map(el => el.length);
    //     console.log("🚀 ~ file: main-examples.js:269 ~ removePAndSumLenght ~ wordsLength:", wordsLength)
    //     const sum = removeP * (wordsLenght + wordsLength)

    //     return sum;
        
        
        
        // const onlyPositiveArray = arr.filter( el => el >= 0 );  //operazione di filtraggio
       
        // const squaredArray = onlyPositiveArray.map( el => el ** 2 );  // elevazione di el al quadrato con **
        
        // return squaredArray;
    // }
    
    
    // console.log(removePAndSumLenght(test1));



    // svolgimento esercizi finale 



    


//1) Dato un array di stringhe, eliminare tutte quelle che non contengono la lettera p
//   e ritornare la somma delle lunghezze delle rimanenti

// function pRemoverAndSumLength(strArr) {
//     let pArray = strArr.filter(el => el.includes('p'))
//     lengthSumArr = pArray.reduce ((acc,curr)=> acc+curr.length ,0 )
//     return lengthSumArr
// }

// console.log(pRemoverAndSumLength(test1));


//     function pRemoverAndSumLength2(strArr){
//         return strArr.filter(el => el.includes('p'))
//                         .reduce ((acc,curr)=> acc+curr.length ,0 )
//     }

// console.log(pRemoverAndSumLength2(test1));

// function pRemoverAndSumLength3(strArr) {
//     let acc = 0
//     for (const curr of strArr) {
//         if (curr.includes('p')) {
//             acc = acc + curr.length
//         }
        
//     }
//     return acc
// }

// console.log(pRemoverAndSumLength3(test1));


// function pRemoverAndSumLength4(strArr) {
    
//     return strArr.reduce((acc, curr) => {
//         if (curr.includes('p')) {  
//             acc = acc + curr.length;  
//         }
//         return acc;
//     }, 0);
// }

// console.log(pRemoverAndSumLength4(test1));

//2) dato un array di numeri, moltiplicarli per il loro indice
//   rimuovere quelli maggiori di 1000
//   e restiturli in formato stringa, separati da punto e virgola

// function multiplyByIndexRemoveLess1000AndReturnStrings(nArr) {
//     let timesIndexArr = nArr.map((el,i) => el*i)
//     let lessThan1000 = timesIndexArr.filter(el=> el<1000)
//     let strArray = lessThan1000.reduce ((acc,curr) => acc + String(curr) + ';','')
//     return strArray
// }

// console.log(multiplyByIndexRemoveLess1000AndReturnStrings(test2));


// function multiplyByIndexRemoveLess1000AndReturnStrings2(nArr) {
//     return nArr.map((el,i) => el*i)
//                     .filter (el=> el<1000 )
//                     .reduce ((acc,curr) => acc + String(curr) + ';','')
// }

// console.log(multiplyByIndexRemoveLess1000AndReturnStrings2(test2));

// function multiplyByIndexRemoveLess1000AndReturnStrings3(nArr) {
//     let acc = ''
//     for (const curr of nArr) {
//         if ((curr*i)<1000) {
//             acc = acc + curr
//         }
        
//     }
//     return acc
// }

// console.log(multiplyByIndexRemoveLess1000AndReturnStrings3(test2));
//3) data una stringa, eliminare tutte le parole più corte di 4 caratteri
//   e restituirle in un array ordinate per lunghezza dalla piu lunga




// CAPITOLO 4 ESERCIZIO 1 DI ELOQUENT --------------------------------


// function range(start, end) {
    
//    const tempArray = [];

//    if (end < start) {
//     return tempArray;
//    }

//    for (let i = start; i <= end; i++) {
//       tempArray.push(i);
    
//    }
//    return tempArray;

// }

// console.log(range(-5, 50));





// function range(start, end, step = 1, reversed = false) {
//   const tempArray = [];

//   if (reversed) {
//     if (start < end) {
//       return tempArray;
//     }

//     for (let i = start; i >= end; i -= step) {
//       tempArray.push(i);
//     }
//   } else {
//     if (end < start) {
//       return tempArray;
//     }

//     for (let i = start; i <= end; i += step) {
//       tempArray.push(i);
//     }
//   }
//   return tempArray;
// }

// console.log(range(-5, 50));
 
// console.log(range(0, 100, 2));





// function sum(numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// console.log(sum(range(0, 10)));




// CAPITOLO 4 ESERCIZIO 2 DI ELOQUENT --------------------------------


const testArray = ['qui', 'quo', 'qua'];

function reverseArray(arr) {
    
    tempArray = [];

    for (let i = arr.length -1; i >= 0 ; i--) {      // arr.length -1 per far iniziare il ciclo dal fondo dell'array
        const element = arr[i];
        tempArray.push(element);
        
    }
    return tempArray;
}

const newArray = reverseArray(testArray);   // abbiamp creato una costante per dire che reverse array crea un nuovo array e non lavora su quello di partenza
console.log(newArray);
console.log(testArray); // infatti in questo console log viene mostrato l'array testArray nell'ordine originale



// function reverseArrayInPlace(arr) {
    
//        const cloneArray = [...arr];   // stiamo clonando il nostro array
//        let j = 0; // abbiamo creato un nuovo indice 
     
//     for (let i = cloneArray.length -1; i >= 0; i--) {      
//         const element = cloneArray[i];
//         arr[j] = element;
//         j++;
//     }
// }

// reverseArrayInPlace(testArray);
// console.log(testArray);