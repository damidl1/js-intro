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

// // elevamento a potenza
// let paperone = 5 ** 3; 
// // ----------------------------------

// // operazione modulo = dice il resto dell'operazione, ad esempio 6 diviso 2 = 0, si possono usare per capire se il num è pari o dispari
// let basettoni = 6 % 2;      
// let gambaDiLegno = 8 % 2;
// // -----------------------------------

// console.log(qui);
// console.log(qua);
// console.log(quo);

// console.log(paperone);
// console.log(basettoni);
// console.log(gambaDiLegno);

// let ilNumeroPiuPiccolo = -Infinity;
// let ilNumeroPiuGrande = Infinity;

// // per operazioni non standard si usa Math (sqrt ad esempio è la radice quadrata)

// const paperoga = Math.sqrt(16); // Libreria Math per tutte le operazioni non comprese nello standard ES (ecma script)
// console.log(paperoga);
// // --------------------------------------------------

// const rockerduck = 'pippo' / 3;
// console.log(rockerduck);   
// usando questo esce in console NaN, non è un numero


// Boolean -------------------------------------

// const etabeta = true;
// // console.log(etabeta);

// // ! è il not  !true => false;
// //             !false => true;

// // && è and    true && true => true
//  //               true && false => false
//  //               false && true => false
// //                false && false => false

// const gastone = false;

// console.log(etabeta && gastone);
// console.log(etabeta && !gastone);

// //   ||  è or  true || true => true 
// //             true || false => true      
// //                false || true => true
// //                false || false => true

// console.log(etabeta || gastone);
// console.log(!etabeta || gastone);

//              // true 
// console.log((etabeta || gastone) && etabeta);



// STRING ----------------------------------------------

// const orazio = 'io adoro javascript';
//  console.log(orazio[9]);        //   per accedere alle lettere con gli InputDeviceInfo, gli spazi vanno contati

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

const nonnaPapera = 12;
const ciccio = 24;
const joseCarioca = '12';

// > (maggiore)
// >= (maggiore o uguale)

console.log(ciccio > nonnaPapera);


// < (minore)
// >= (minore o uguale)

console.log(ciccio < nonnaPapera);

// != (diverso) (non usare questo)
// !== (diverso)


console.log(ciccio !== nonnaPapera);

// == (uguale con cast (cast è una sorta di conversione))
// === (uguale stretto)

console.log(nonnaPapera == joseCarioca);  //(mai usare questo)
console.log(nonnaPapera === joseCarioca);








