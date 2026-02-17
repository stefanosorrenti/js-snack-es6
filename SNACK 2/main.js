//TRACCIA

/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

//HUMAN CODE

/*
Cosa devo fare?
-Creare un array
-Aggiungere degli oggetti (nel nostro caso 5 squadre di calcio)
-Ogni oggetto deve avere 3 proprieta: nomi, punti fatti, falli subiti (punti e falli devono essere uguali a 0)
-Le il valore di punti fatti e falli subiti deve essere un numero generato casualmente
-Creo una variabile d'appoggio.
-Ciclo nell'array
-Seleziono solo le proprieta nomi e falli subiti
-Loggo tutto in console.
*/

//DATA

const soccerTeams = //Creare un array

[   //Aggiungere degli oggetti (nel nostro caso 5 squadre di calcio)

    { //Ogni oggetto deve avere 3 proprieta:
        name: 'Inter',
        score: 0,
        errors: 0,

    },

    { //Ogni oggetto deve avere 3 proprieta:
        name: 'Milan',
        score: 0,
        errors: 0,

    },

    { //Ogni oggetto deve avere 3 proprieta:
        name: 'Cerignola',
        score: 0,
        errors: 0,

    }
]

console.log(soccerTeams);






//FUNCTIONS

function getRandomNumb(min, max) {
    
     return Math.floor(Math.random() * max) + min;
}

const randomNumb = getRandomNumb(1, 10)


console.log(randomNumb);
