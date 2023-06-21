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


let indice = 0;

do {
    console.log("sono un\'istruzione che deve essere ripetuta")

    indice++;

} while (indice < 10);