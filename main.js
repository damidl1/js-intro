// console.log('hello world!')

// TIPI DI BASE --------------------------------------------------

// 'esempio' // string

// 34 56.6 -23 // number

// true false // boolean 

// TIPI STRANI -------------------------------------------------------

//  NaN = not a number 
// undefined
// null

// ------------------------------------------------------------------


// variabili con let-----------------------------------------------

// let pippo = 5;

// console.log(typeof pippo)

// pippo ='viva il caffè!';

// console.log(typeof pippo)


// console.log(pippo);


// variabili con const-----------------------------------------------

// const pluto = 12;


// console.log(pluto);


// variabili con var (non usare)---------------------------------

// var paperino = true;
 
// paperino = -123;

// console.log(paperino);



// differenza con let 

// topolino = 5;

// let topolino;               non funziona prima di dichiarare la variabile


// minnie = 5;

// var minnie;

// console.log(minnie);       funziona anche prima di dichiarare la variabile


// Number -------------------------------------

// let qui = (5 + 9);
// let qua = (5 * 9);
// let quo = (5 / 9);

//  elevamento a potenza
// let paperone = 5 ** 3; 
//  ----------------------------------

//  operazione modulo = dice il resto dell'operazione, ad esempio 6 diviso 2 = 0, si possono usare per capire se il num è pari o dispari
// let basettoni = 6 % 2;      
// let gambaDiLegno = 8 % 2;
//  -----------------------------------

// console.log(qui);
// console.log(qua);
// console.log(quo);

// console.log(paperone);
// console.log(basettoni);
// console.log(gambaDiLegno);

// let ilNumeroPiuPiccolo = -Infinity;
// let ilNumeroPiuGrande = Infinity;

//  per operazioni non standard si usa Math (sqrt ad esempio è la radice quadrata)

// const paperoga = Math.sqrt(16); // Libreria Math per tutte le operazioni non comprese nello standard ES (ecma script)
// console.log(paperoga);
// --------------------------------------------------

// const rockerduck = 'pippo' / 3;
// console.log(rockerduck);   
// usando questo esce in console NaN, non è un numero


// Boolean -------------------------------------

// const etabeta = true;
//  console.log(etabeta);

// ! è il not  !true => false;
//              !false => true;

//  && è and    true && true => true
//                 true && false => false
//                 false && true => false
//                 false && false => false

// const gastone = false;

// console.log(etabeta && gastone);
// console.log(etabeta && !gastone);

//    ||  è or  true || true => true 
//             true || false => true      
//                 false || true => true
//                false || false => true

// console.log(etabeta || gastone);
// console.log(!etabeta || gastone);

                // true 
// console.log((etabeta || gastone) && etabeta);



// STRING ----------------------------------------------

// const orazio = 'io adoro javascript';
//  console.log(orazio[9]);        //   per accedere alle lettere con gli indici, gli spazi vanno contati

//  const clarabella = 'perchè non sono sano di mente'
//   console.log(orazio + ' ' + clarabella);  //  concatenazione stringa

//   const aladin = 27;
//   console.log(orazio + 27);

//   console.log(clarabella.length);
//   console.log(clarabella.toUpperCase());
  

// undefined and null (va a definire una varibile che non è ancora stata riempita)----------------------------------------------

// const macchiaNera = 5;

// let paperinik; 

// console.log(paperinik);  // se si mette console.log prima di inizializzare la variabile esce undefined (scatola vuota)

// paperinik = 12;          

// console.log(paperinik);   // se invece si mette console.log dopo in console viene stampato 12 correttamente


// paperinik = undefined;    // mettere undefined svuota la variabile e in console appare undefined (non usare)

// console.log(paperinik); 

// paperinik = null;

// console.log(paperinik);

// undefined elemento vuoto perchè ancora non inizializzato, per svuotare un elemento invece si usa null

// OPERATORI DI CONFRONTO  (ci aiutano a confrontare gli elementi e di solito restituiscono booleani)------------------------------------

// const nonnaPapera = 12;
// const ciccio = 24;
// const joseCarioca = '12';

//  > (maggiore)
// >= (maggiore o uguale)

// console.log(ciccio > nonnaPapera);


//  < (minore)
//  >= (minore o uguale)

// console.log(ciccio < nonnaPapera);

//  != (diverso) (non usare questo)
//  !== (diverso)


// console.log(ciccio !== nonnaPapera);

//  == (uguale con cast (cast è una sorta di conversione))
//  === (uguale stretto)

// console.log(nonnaPapera == joseCarioca);  //(mai usare questo)
// console.log(nonnaPapera === joseCarioca);


// CORTO CIRCUITO DEGLI OPERATORI ---------------------------------

// let biancaNeve;

// let ariel = 'ciao';

// console.log(biancaNeve || ariel);   // in questo caso l'operatore logico controlla biancaNeve che è vuoto e passa ad ariel che contiene 'ciao' e assegna il valore 'ciao' contenuto in essa
// la logica quindi è che controlla il primo se è true e se il primo è false controlla il secondo sennò si ferma


// ALERT E PROMPT -------------------------------

// alert('ciao a tutti!');

// const elsa = prompt('come ti chiami?');
// console.log(elsa);               // il prompt fa apparire una finestra e assegna il valore inserito nella finestra alla variabile


// OPERATORI DI CONTROLLO --------------------------------------------------------
// if else control flow

// const mulan = prompt('dimmi un numero');

// if (mulan < 50) {
//     console.log('numero piccolo');
// } else {
//     console.log('numero grande');
// }

// console.log('fine del programma')

// const mulan = prompt('dimmi un numero');


// if (mulan % 2 === 0) {               // ad esempio qui controlla se il numero inserito dall'utente è pari
//     alert('hai inserito un numero pari');
// } else {
//     alert('hai inserito un numero dispari');
// }

// console.log('fine del programma')


// else if --------------------------------------

// const jasmine = prompt('dimmi un numero');
// const isJasmineDivisibleBy3 = jasmine % 3 === 0;
// const isJasmineDivisibleBy5 = jasmine % 5 === 0;

//  if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {           //qui diciamo: jasmine è divisibile per 3 e per 5?
//     alert('FIZZBUZZ');
// } else if (isJasmineDivisibleBy3){                               // gli else dicono " se entri in uno ignora tutti gli altri"
//      alert('FIZZ');
//  } else if (isJasmineDivisibleBy5){
//      alert('BUZZ');
//  } else {
//     alert(jasmine);
//  }
  

// if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {           
//     alert('FIZZBUZZ');
// } if (isJasmineDivisibleBy3){                                       // in questo invece controlliamo tutte le condizioni 
//     alert('FIZZ');
// } if (isJasmineDivisibleBy5){
//     alert('BUZZ');
// } 


// SWITCH CONTROL FLOW --------------------------------------

const rapunzel = prompt('inserisci FIZZ, BUZZ O FIZZBUZZ');

switch (rapunzel) {
  case 'FIZZ':
    alert('vuoi un numero divisibile per tre');
    break;
  case 'BUZZ':
    alert('vuoi un numero divisibile per cinque');
    break;
  case 'FIZZBUZZ':
    alert('vuoi un numero divisibile per tre e cinque');
    break;
  default:
    alert('hai sbagliato ad inserire la parola');
    break;
}














