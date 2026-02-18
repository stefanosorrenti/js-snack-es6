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
-Seleziono le proprieta nomi,  falli subiti e punti
    -SE falli subiti OR punti subiti sono uguali a 0
        -assegno un numero random ad entrambi
        -pusho nella variabile d'appoggio falli subiti e nomi
    
-Loggo la varibile d'appoggio.
*/

//DATA
 //Generatore casuale di numeri
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
console.log('Squadre/Oggetti');

//console.log(soccerTeams);





//LOGIC

let teamStats = [] //Creo una variabile d'appoggio.

for (let i = 0; i < soccerTeams.length; i++) { //Ciclo nell'array soccerTeams
    const team = soccerTeams[i];
    //console.log(soccerTeams[i]);
    //Seleziono ogni singolo elemento nel nostro array (nel nostro caso sto selezioando oggetti) e lo salvo in una variabile
    //console.log('sono nel ciclo for');
    //console.log(team.errors);
    //console.log(team.name);
    //console.log(team.score);
    
    //SE falli subiti OR punti subiti sono uguali a 0
    if (team.score || team.errors === 0) {
        /* const randomNumb = getRandomNumb(1, 10) */
        team.score = getRandomNumb(1, 10) //assegno un numero random  
        team.errors = getRandomNumb(1, 5) //assegno un numero random  
        //console.log(team.score);
        //console.log(team.errors);

         teamStats.push({ //pusho nella variabile d'appoggio creando un nuovo oggetto.
            name: team.name, 
            errors: team.errors, 
            score: team.score})
        
        
        /* teamStats.push() //pusho nella variabile d'appoggio falli subiti e nomi delle squadre */

    }
}



console.log(teamStats);


//Loggo la varibile d'appoggio interpolando l'arrai con il rispettivo indice che corrisponde alla proprieta selezionata prima dagli oggetti.
console.log(` 
    La squadra ${teamStats[0].name} ha subito ${teamStats[0].errors} falli.
    La squadra ${teamStats[1].name} ha subito ${teamStats[1].errors} falli.
    La squadra ${teamStats[2].name} ha subito ${teamStats[2].errors} falli.`);




//console.log(teamStats[0]);



//FUNCTIONS

function getRandomNumb(min, max) {
    
    return Math.floor(Math.random() * max) + min;
}



