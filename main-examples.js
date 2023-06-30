// Scrivere una funzione che dato un array di numeri                   // scaricare turbo log extension
// li eleva al quadrato e rimuove i negativi


const testArray = [2, -12, 0, 27, 4, -3, 12, 1, -1];


function squareAllAndRemoveNegatives(arr) {   // mapping e filter // sempre meglio fare prima la filter se possibile
    const onlyPositiveArray = arr.filter( el => el >= 0 );  //operazione di filtraggio
   
    const squaredArray = onlyPositiveArray.map( el => el ** 2 );  // elevazione di el al quadrato con **
    
    return squaredArray;
}


console.log(squareAllAndRemoveNegatives(testArray));



//  versione 2

function squareAllAndRemoveNegatives2(arr) {   
    return arr.filter( el => el >= 0 )
                    .map( el => el ** 2 );   // lancia filter e poi sull'array che esce fuori lancia map
}

console.log(squareAllAndRemoveNegatives2(testArray));


// ogni volta che invochiamo queste funzioni cicliamo l'array




// versione 3


function squareAllAndRemoveNegatives3(arr) {    // usiamo il template della reduce che funziona per tutto
    const accumulator = [];

    for (const number of arr) {        // usiamo il for of per scrivere una cosa veloce senza mettere la i, equivalente del for normale
       
        if ( number >= 0) {  // prima il filtraggio
          const newNumber = number ** 2;
          accumulator.push(newNumber);
    }
}
    return accumulator;
}

console.log(squareAllAndRemoveNegatives3(testArray));




// versione 4



function squareAllAndRemoveNegatives4(arr) {    // usiamo il template della reduce che funziona per tutto
     return arr.reduce((acc, curr) => {
        if ( curr >= 0) {
            const newNumber = curr ** 2;
            acc.push(newNumber);
        }
        return acc;
     }, []);           // si mettono le quadre qui per inizializzare l'array vuoto per inserire dentro i valori

     // return arr.reduce((a, c) => c >= 0 ? [...a, c ** 2] : a, []);  stessa funzione sopra ma in una linea (meglio usare quella sopra)

}

console.log(squareAllAndRemoveNegatives4(testArray));





// Scrivere una funzione che dato un array di numeri 
// somma tutti quelli divisibili per 3


function summAllDivisibleByThree1(arr) {
    
    const divisibleBy3Array = arr.filter( el => el % 3 === 0 );
    const sum = divisibleBy3Array.reduce(( acc, curr ) => acc + curr , 0);
    
    return sum;
}

console.log(summAllDivisibleByThree1(testArray));



// versione 2




function summAllDivisibleByThree2(arr) {
    
   return arr.filter( el => el % 3 === 0 )    
             .reduce(( acc, curr ) => acc + curr, 0);      // lo 0 qui sarebbe lo starting value
}

console.log(summAllDivisibleByThree2(testArray));



// versione 3



function summAllDivisibleByThree3(arr) {
    
    let accumulator = 0;

    for (const number of arr) {
        if (number % 3 === 0) {
            accumulator = accumulator + number;
        }
    }
    return accumulator;
 }
 
 console.log(summAllDivisibleByThree3(testArray));
 


 // versione 4



 function summAllDivisibleByThree4(arr) {
   
    return arr.reduce((acc, curr) => {
     if ( curr % 3 === 0 ) {
       acc = acc + curr;
     }
     return acc;
   }, 0);
 }

 console.log(summAllDivisibleByThree4(testArray));




 // data una stringa di elementi separati da virgole
 // convertire gli elementi in numeri
 // togliere quelli che non sono numeri
 // e sommare i numeri tra loro


 const testString = '2000,10,pippo,345,-234,ciambella,2,,'


 function convertToNumbersAndSummAll(str) {
   const stringArray = str.split(","); // prima cosa trasformare la stringa in un array
   const numbersArray = stringArray.map((el) => parseFloat(el)); // seconda cosa trasformare l'array di stringhe in un array di numeri con mapping,parseFloat uno dei modi per convertire
   function isANumber(element) {
     if (isNaN(element)) {
       // per rimuovere i NaN facciamo una filter e usiamo il metodo isNaN per verificare i NaN
       return false;
     } else {
       return true;
     }
   }
   const onlyNumbersArray = numbersArray.filter(isANumber);

   // const onlyNumbersArray = numbersArray.filter(el => !isNaN(el));  // stessa funzione sopra ma su una linea

   const sum = onlyNumbersArray.reduce((acc, curr) => acc + curr, 0);
   return sum;
 }

 console.log(convertToNumbersAndSummAll(testString));


 
 
 // versione 2



function convertToNumbersAndSummAll2(str) {
   return str.split(",")
          .map(el => parseFloat(el))
          .filter(el => !isNaN(el))
          .reduce((acc, curr) => acc + curr, 0);
   
 }

 console.log(convertToNumbersAndSummAll2(testString));




 // versione 3


 function convertToNumbersAndSummAll3(str) {
    
    const stringArray = str.split(',');

    let accumulator = 0;

    for (const str of stringArray) {    
        const number = parseFloat(str);
        if (!isNaN(number)) {
            accumulator = accumulator + number;   // reduce
        }   
    }
    return accumulator;    
 }
 
  console.log(convertToNumbersAndSummAll3(testString));


  
  
  // versione 4



  function convertToNumbersAndSummAll4(str) {
    
    return str.split(',').reduce((acc, curr) => {
        const number = parseFloat(curr);  // map
        if (!isNaN(number)) {  // filter
            acc = acc + number;  // reduce
        }
        return acc;
    }, 0);
   
 }
 
  console.log(convertToNumbersAndSummAll4(testString));