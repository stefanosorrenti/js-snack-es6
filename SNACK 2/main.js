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
const randomNumb = getRandomNumb(1, 10) //Generatore casuale di numeri
console.log(`Numero casuale ${randomNumb}`);
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

console.log(soccerTeams);





//LOGIC

let teamStats = [] //Creo una variabile d'appoggio.

for (let i = 0; i < soccerTeams.length; i++) { //Ciclo nell'array soccerTeams
    const team = soccerTeams[i]; //Seleziono ogni singolo elemento nel nostro array (nel nostro caso sto selezioando oggetti) e lo salvo in una variabile
    console.log('sono nel ciclo for');
    //console.log(team.errors);
    //console.log(team.name);
    //console.log(team.score);

    //SE falli subiti OR punti subiti sono uguali a 0
    if (team.score || team.errors === 0) {
        team.score = randomNumb //assegno un numero random  
        team.errors = randomNumb ////assegno un numero random  
        //console.log(team.score);
        //console.log(team.errors);

        teamStats.push({team})
        
        
        /* teamStats.push() //pusho nella variabile d'appoggio falli subiti e nomi delle squadre */

    }
}



console.log(teamStats);


//Loggo la varibile d'appoggio interpolando l'arrai con il rispettivo indice che corrisponde alla proprieta selezionata prima dagli oggetti.
console.log(` 
    La squadra ${teamStats[0].team.name} ha subito ${teamStats[0].team.errors} falli.
    La squadra ${teamStats[1].team.name} ha subito ${teamStats[1].team.errors} falli.
    La squadra ${teamStats[2].team.name} ha subito ${teamStats[2].team.errors} falli.`);




//console.log(teamStats[0]);



//FUNCTIONS

function getRandomNumb(min, max) {
    
    return Math.floor(Math.random() * max) + min;
}



