

const student = {name: 'Damiano', yob: 1993, isMarried: false}



console.log(student.nome);     // per prendere il parametro nome
console.log(student['anno']);  // per prendere i valori con le quadre


student.address = 'taggia';    // per aggiungere un valore nuovo all'oggetto

console.log(student);


console.log(Object.keys(student));     // per vedere tutte le etichette dell'oggetto  keys per vedere le etichette
console.log(Object.values(student));   // per vedere tutti i valori delle etichette   values per vedere i valori delle etichette


for (const key in student) {        // for in: per ognuna delle key dentro all'oggetto fa un ciclo

    const value = student[key];    // prende il value associato alla key dell'oggetto
    console.log(key, value);

}

const student2 = {
    name: 'Manuela',
    yob: 1988,
    isMarried: false,                              // yob: year of birth
    address: 'Genova',
    marks: [8, 9, 7, 8, 10],                       // marks : voti
    dog: {
        name: 'Nala',
        breed: 'lupo cecoslovacco',
        yob: 2017,
    }
}

console.log(student2);


// FUNZIONI PER GESTIRE OGGETTI



function calculateAge(student) {                       // funzione per calcolare l'età
    
     const actualYear = new Date().getFullYear();     //comando per prendere anno e ora attuale
     
     const age = actualYear - student.yob;           // per calcolare l'età

    return age;
    }
calculateAge(student2);

console.log(calculateAge(student2));



const student3 = {
    name: 'Cesare',
    yob: 2003,
    isMarried: false,                              
    address: 'Genova',
    marks: [9, 9, 7, 8, 6],                       
    dog: {
        name: 'Luna',
        breed: 'bull terrier',
        yob: 2016,
    }
}

console.log(calculateAge(student3));

console.log(calculateAge(student));


const student4 = {
    name: 'Stefano',
    yob: 1998,
    isMarried: false,                              
    address: 'Genova',
    marks: [9, 10, 6, 8, 6],                       
    dog: null,
    }

    console.log(calculateAge(student4));


    function calculateDogAge(student) {                // funzione per calcolare anni del cane
        
        if (student.dog){                              // condizione che si esegue se lo studente ha il cane
            const actualYear = new Date().getFullYear();
            const dogAge = (actualYear - student.dog.yob) * 7;        // si scende di livello fino a yob
            return dogAge; 
        } else {
            return -1;             // si esegue nel caso in cui lo studente non abbia il cane
        }           
      }

    console.log(calculateDogAge(student2));
    console.log(calculateDogAge(student3));
    console.log(calculateDogAge(student4));


 

    function calculateMean(student){               // Funzione per calcolare la media matematica
       
        let sum = 0;     

        for (const mark of student.marks) {
            sum += mark;
        }
        const mean = sum/student.marks.length;     // somma diviso il numero di voti dello studente

        return mean;

    }  
    
    console.log(calculateMean(student2));
    console.log(calculateMean(student3));
    console.log(calculateMean(student4));


    