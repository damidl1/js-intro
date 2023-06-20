// console.log('hello world!')

// TIPI DI BASE --------------------------------------------------

// 'esempio' // string

// 34 56.6 -23 // number

// true false // boolean 

// TIPI STRANI -------------------------------------------------------

//  NaN = not a number 

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

let qui = (5 + 9);
let qua = (5 * 9);
let quo = (5 / 9);

// elevamento a potenza
let paperone = 5 ** 3; 
// ----------------------------------

// operazione modulo = dice il resto dell'operazione, ad esempio 6 diviso 2 = 0, si possono usare per capire se il num è pari o dispari
let basettoni = 6 % 2;      
let gambaDiLegno = 8 % 2;
// -----------------------------------

console.log(qui);
console.log(qua);
console.log(quo);

console.log(paperone);
console.log(basettoni);
console.log(gambaDiLegno);

let ilNumeroPiuPiccolo = -Infinity;
let ilNumeroPiuGrande = Infinity;

// per operazioni non standard si usa Math (sqrt ad esempio è la radice quadrata)

const paperoga = Math.sqrt(16); // Libreria Math per tutte le operazioni non comprese nello standard ES (ecma script)
console.log(paperoga);
// --------------------------------------------------

const rockerduck = 'pippo' / 3;
console.log(rockerduck);   
// usando questo esce in console NaN, non è un numero



