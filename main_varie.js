



//  SCOPE ----------------------------


//  if, funzioni e cicli determinano degli scope, sono delimitati dalle parentesi graffe

//  scope globale è dichiarato fuori da qualsiasi graffa 

// let pippo = 10;  // scope globale 

// if (pippo < 20) {        // l'if puo' utilizzare la costante pippo perchè ha scope globale
    
//     pippo = pippo + 3;
//     let pluto = 4;
// }


//  pluto = pluto + 1;

//  console.log(pippo);
//  console.log(pluto);

//  gli scope più interni (figli) possono vedere le variabili dei padri mentre gli scope padri non possono vedere le variabili dei figli (quelli dentro alle parentesi)



//  SCOPE NESTATI ----------------------------------------------


// const i = 'sono la i più antica'

// function createEvenArray(max) {
//     const tempArray = [];
//     const i = 40;
    
//     for (let i = 0; i <= max; i++) {
//                                      // in questa funzione la i che viene utilizzata è quella del for, la variabile più vicina mette in ombra quella più lontana
//         if (i % 2 === 0) {           // è fondamentale continuare a cambiare soprattutto nei cicli il nome della variabile (i, j, k)
//             tempArray.push(i);
//         }
        
//     }
// return tempArray;

// }

// console.log(createEvenArray(1000));

// for (let i = 0; i < 100; i++) {
   
//     for (let i = 0; i < 20; i++) {
        
//         for (let i = 0; i < 30; i++) { // <---- tra tutte queste i viene loggata la più interna mentre le esterne vengono messe in ombra
//             console.log(i)      
//     }
//   }
// }



// FUNZIONE PARAMETRI ARGS ---------------------------------------------


// non si può creare una funzione con tanti parametri e gestirli uno per uno, esiste una sintassi che può gestire n parametri

// function mean() {          // mean media voti
    
    // console.log(arguments);  // arguments proprietà per mostrare i parametri passati alla funzione

    // const sum = v1 + v2 + v3;   // calcolo mean senza usare arguments
    // const mean = sum / 3;

    // return mean;


    // calcoliamo mean utilizzando arguments
    
   // let sum = 0;

    // for (let i = 0; i < arguments.length; i++) {
     //   const value = arguments[i];
      //  sum += value;        // questo vuol dire sum + value
   // }
   // const mean = sum/arguments.length;
   // return mean;
// }

// console.log(mean(3, 4, 5));



// function sumAll(...args) {  // (...args) serve per dire che la funzione può prendere infiniti parametri, è la stessa cosa di usare arguments
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         const value = args[i];
//         sum = sum + value;
        
//     }
//     return sum;
// }

// console.log(sumAll(3, 4, 5));

// i tre puntini dicono " tutto quello che trovi dentro alle parentesi quando viene invocata una funzione 
// mettilo dentro l'str che si chiama args[i]"



// function pippo(v1, v2, ...args) {
//     console.log('arguments', arguments);
//     console.log('v1', v1);
//     console.log('v2', v2);

//     console.log('args', args);
// }

// pippo(2, 4, 6, 8, 0);       // in questo console log v1 prende 2,  v2 prende 4 mentre args prende il resto dei valori (6, 8 ,0)



// REDUCE ----------------------------------------------------------------


// logica per tutte le operazioni di reduce

// function sumAllArray(arrayToSum) {
    
//     let accumulator =  0;                                   // di solito l'accumulatore viene inizializzato con un valore neutro rispetto a quello che vogliamo fare
//     for (let i = 0; i < arrayToSum.length; i++) {    // ad esempio str vuoto, 0 per un operazione matematica etc
//         const current = arrayToSum[i];

//         accumulator = accumulator + current;
        
//     }                                
//    return accumulator;
// }

// console.log('sumAllArray', sumAllArray([2, 3, 4, 5]));






// function multiplyAllArray(arrayToMultiply) {
    
//     let accumulator =  1;                       // qui abbiamo messo 1 perchè è il valore neutro per la moltiplicazione
//     for (let i = 0; i < arrayToMultiply.length; i++) {    
//         const current = arrayToMultiply[i];

//         accumulator *= current;             // *= è come scrivere accumulator * current
        
//     }                                
//    return accumulator;
// }

// console.log('multiplyAllArray', multiplyAllArray([2, 3, 4, 5]));






// function join(arrayToJoin) {
    
//     let accumulator =  '';                       // qui abbiamo messo stringa vuota perchè il neutro di una stringa
//     for (let i = 0; i < arrayToJoin.length; i++) {    
//         const current = arrayToJoin[i];

//         accumulator += current;            
        
//     }                                
//    return accumulator;
// }

// console.log('join', join(['qui', 'quo', 'qua']));





// function sumEvenAndOdd(arrayToReduce) {
    
//     let accumulator =  {sumOfEven: 0, sumOfOdd: 0};    // qui abbiamo messo un oggetto con due chiavi per fare la somma dei pari da una parte e dispari dall'altra
//     for (let i = 0; i < arrayToReduce.length; i++) {    
//         const current = arrayToReduce[i];

//        if (current % 2 === 0) {
//         accumulator.sumOfEven += current;
//        } else {
//         accumulator.sumOfOdd += current;
//        }        
        
//     }                                
//    return accumulator;
// }

// console.log('sumEvenAndOdd', sumEvenAndOdd([1, 2, 3, 4, 5, 6]));




// RICORSIONE ------------------------------------------------------------

// ci permette di svolgere più volte un operazione senza usare i cicli
// FATTORIALE (!)

// 5! = 5 * 4 * 3 * 2 * 1  = 120!  // il fattoriale di un numero è la moltiplicazione di quel numero per tutti i numeri che vengono prima fino a 1


// DEFINIZIONE 
// 1) 1! = 1;
// 2) n! = n * (n - 1)!


// 5! = 5 * 4!  applichiamo la definizione 2
//          4 * 3!
             // 3 * 2!
              // 2 * 1!
                 //    1


 
                
// function fattoriale(n) {
//     // 1) definizione fattoriale 1
//     if (n === 1){     // dice che se il numero è 1 il suo fattoriale essendo 1 è uguale a 1
//         return 1;    
//     } else {
//         // 2) definizione fattoriale 2
//         return n * fattoriale(n - 1);
//     }
// }

// console.log(fattoriale(5));



// ESERCIZI -----------------------------------


// function min(v1, v2) {
//   let minimun;
//   if (v1 < v2) {
//     minimun = v1;
//   } else {
//     minimun = v2;
//   }
//   return minimun;
// }

// console.log('min test', min(3, 8) === 3);  // se minimun è uguale a 3 ritorna true
// console.log('min test', min(13, 8) === 8);   // se minimun è uguale a 8 ritorna true





// function min2(...args) {
    
//     let accumulator = -Infinity;    // qui abbiamo assegnato il minimo assoluto con -Infinity
  
//     for (let i = 0; i < args.length; i++) {
//         const current = args[i];

//         if (i === 0) {
//             accumulator = current;
//         } else if (accumulator > current) {
//             accumulator = current;
//         }
        
//     }
//    return accumulator;
// }

// console.log('min2', min2());
// console.log('min2', min2(2));
// console.log('min2', min2(3, 2, -5, 8));






// Esercizio con ricorsione



// 1) isEven (0) => true
// 2) isEven (1) => false
// 3) isEven (n) => isEven (n-2);



// function isEven(n) {
//     if (n === 0) {
//         return true;
//     } else if (n === 1){
//         return false;
//     } else {
//         return isEven(n - 2);
//     }
// }

// console.log('isEven(3)', isEven(3));
// console.log('isEven(6)', isEven(6));




function isIsogram(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
    const wordArray = str.split(char);
    const count = wordArray.length -1;

    if (count > 1){
        return false;
    }  
    }
    return true;
}

console.log(isIsogram('cane'));
console.log(isIsogram('domodossola'));
console.log(isIsogram('manuela'));

