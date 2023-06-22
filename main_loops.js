// CICLO WHILE --------------------------------------------------

// let indice = 0;

// while (indice < 10) {                                           // while = finchè una condizione restituisce true continuiamo a ciclare

//   console.log("sono un'istruzione che deve essere ripetuta");

//   indice = indice +1;

//   indice += 1;

//     indice ++;

// indice --;

// }

//   per interrompere il ciclo abbiamo messo indice +=1,
//   così il ciclo aggiunge 1 fino a quando arriva a 10 e poi
//    quando arriva a 10 essendo 10 non minore di 10 si interrompe

// let indice = 0;

// while (indice < 100) {

//     if (indice % 2 === 0) {
//         console.log(indice);
//     }
//     indice ++;
// }

// con questo codice abbiamo usato while per far apparire in console log i numeri minori di 100
// e con if abbiamo detto che l'indice deve essere un numero pari per apparire in console

// while (true) {
//   const input = prompt("scrivi una frase o scrivi FINE per terminare");

//   if (input === "FINE") {
//     alert('programma terminato')
//     break;
//   } else {
//     // alert('la lunghezza della frase inserita è: ' + input.length + ' caratteri ');
//     alert(`la lunghezza della frase inserita è ${input.length} caratteri`)
//   }
// }

// per interrompere ciclo forzatamente si usa break
// alert(`la lunghezza della frase inserita è ${input.length} caratteri`) è una stringa interpolata,
// utile per scrivere un lungo testo con tante interpolazioni

// CICLO DO WHILE --------------------------------------------------

// let indice = 0;

// do {
//     console.log("sono un\'istruzione che deve essere ripetuta")

//     indice++;

// } while (indice < 10);

// do while per eseguire almeno una volta l'istruzione prima di iniziare il ciclo con while

// CICLO FOR --------------------------------------------------

// for (let i = 0; i < 10; i++) {                                    i sta per index

//     console.log('sono un\'istruzione che deve essere ripetuta')
// }

// il for comprime tutto quello che abbiamo fatto finora con il ciclo while e do while

// for (let i = 0; i < 100; i += 2) {
//     console.log('sono un numero pari e sono: ' + i);

// }

// con questo for partendo da 0 controlliamo tutti i numeri pari e minori di 100 e li stampiamo in console

// for (let i = 0; i < 100; i++) {
//      if (i < 50) {
//         const risultato = i * 2;
//         console.log(risultato);
//      } else {
//         const risultato2 = i / 2;
//         console.log(risultato2);
//      }

// }

// for per ciclare tutti i numeri minori di 100 e se il numero è minore di 50 moltiplica per 2 e se è maggiore di 50 divide per 2

// for (let i = 100; i >= 0; i--) {
//     console.log(i);

// }

// con questo for vogliamo stampare in console i numeri da 100 fino a 0

// for (let i = 100; i >= 0; i--) {
//   if (i % 2 === 0) {
//     console.log('pari', i);                                              //  per concatenare possiamo anche scrivere ad esempio console.log('pari', i)
//   } else {
//     console.log('dispari', i);
//   }
// }

// con questo for vogliamo stampare i numeri da 100 a 0 e definire quelli pari e quelli dispari

// let paperone = prompt('scrivi una frase');

// for (let i = 0; i < paperone.length; i++) {

//     const char = paperone[i];
//     console.log(char);
// }

// con questo for partiamo da zero e non superando la lunghezza della stringa contenuta in paperone andiamo a prendere carattere per carattere della stringa

// CICLI NESTATI (CICLI DENTRO AI CICLI) ------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {

//         console.log('riga: ' + i + ', colonna: ' + j)
//     }

// }

// CAPITOLO 2 ES 1 DI ELOQUENT JS -------------------------------

// let startingString = '#'

// for (let i = 0; i < 7; i++) {
//   console.log(startingString);
//   startingString = startingString + '#';
// }

// let startingString2 = '#';

// while (startingString2.length < 8) {                                      // stessa cosa del codice sopra ma con while
//   console.log(startingString2);
//    startingString2 = startingString2 + '#';
//}

// CAPITOLO 2 ES 2 ------------------------------------------------------

// for (let i = 1;  i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// CAPITOLO 2 ES 3 ------------------------------------------------------

// VERSIONE EASY

// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         console.log(' # # # #');
//     } else {
//         console.log(' # # # #');
//     }
// }

// VERSIONE EASY MA COME VUOLE IL LIBRO

// let chessboard = '';

// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0) {
//         chessboard += ' # # # #\n'                 // questo è la stessa cosa di scrivere chessboard = chessboard + ' # # # #\n'
//     } else {
//         chessboard += '# # # #\n'
//     }
// }

// console.log(chessboard);

// VERSIONE MENO EASY

// size = 4;

// let chessboard = '';

// for (let i = 0; i < size; i++) {
// for (let j = 0; j < size; j++) {
// se i è pari {
// se j è pari {
//aggiungo a chessboard uno spazio
//} altrimenti {
//aggiungo a chessboard un cancelletto
//}
//} altrimenti {
// se j è pari {
//aggiungo a chessboard un cancelletto
//} altrimenti {
//aggiungo a chessboard uno spazio
//}
//}
// }
//aggiungo a chessboard uno \n
// }

// console.log(chessboard);

// const size = 4;
// let chessboard = "";

// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++) {
//     if (i % 2 === 0) {
//       if (j % 2 === 0) {
//         chessboard = chessboard + " "; // se tutte e due le linee sono pari aggiungiamo uno spazio
//       } else {
//         chessboard = chessboard + "♡"; // se una linea è pari e una è dispari aggiungiamo un cancelletto (cuoricino qui)
//       }
//     } else {
//       if (j % 2 === 0) {
//         chessboard = chessboard + "♡";
//       } else {
//         chessboard = chessboard + " ";
//       }
//     }
//   }
//   chessboard = chessboard + "\n";
// }


// console.log(chessboard);



// altra soluzione ---------------------

// const size = 4;
// let chessboard = "";

// for (let i = 0; i < size; i++) {
//   for (let j = 0; j < size; j++)
//     if (i % 2 === 0 && j % 2 === 0) {
//       chessboard = chessboard + " ";
//     } else if (i % 2 === 0 && j % 2 !== 0) {
//       chessboard = chessboard + "♡";
//     } else if (i % 2 !== 0 && j % 2 === 0) {
//       chessboard = chessboard + "♡";
//     } else if (i % 2 !== 0 && j % 2 !== 0) {
//       chessboard = chessboard + " ";
//     }
//   chessboard = chessboard + "\n";
// }

// console.log(chessboard);



// altra soluzione -------------------


// const size = 4;
// let chessboard = '';


// for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++){
//         if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)){
//             chessboard = chessboard + ' ';
//         } else {
//             chessboard = chessboard + '♡';
//         }
//     }
//     chessboard = chessboard + '\n'
// }
// console.log(chessboard)