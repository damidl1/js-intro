



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
// mettilo dentro l'array che si chiama args[i]"



// function pippo(v1, v2, ...args) {
//     console.log('arguments', arguments);
//     console.log('v1', v1);
//     console.log('v2', v2);
//     console.log('args', args);
// }

// pippo(2, 4, 6, 8, 0);       // in questo console log v1 prende 2,  v2 prende 4 mentre args prende il resto dei valori (6, 8 ,0)