//TRACCIA

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

//SNACK 1


//HUMAN CODE

/*
Cosa devo fare?
-Creare un array
-Inserisco degli oggetti
-Ogni oggetto deve avere 2 chiavi: nome e peso.
-Creo una variabile d'appoggio.
-Ciclo dentro il nostro array di oggetti
-Seleziono l'oggetto con il valore  weight minore.
-seleziono e pusho quella con il peso minore
-Stampo la variabile d'appoggio.
-stampo a schermo la variabile d'appoggio.

*/


//DATA
//Creare un array
const bikes =

    [ //Inserisco 10 oggetti

        { //Ogni oggetto deve avere 2 chiavi: name e peso.
            name: 'Bici da corsa 3T',
            weight: 10,
        },
        
        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Argon 18',
            weight: 15,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Alan',
            weight: 3,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa bixxis',
            weight: 6,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da crosa crisp',
            weight: 8,
        },
        
        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Decathlon',
            weight: 12,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa pasculli',
            weight: 9,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa vitus',
            weight: 5,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa trek',
            weight: 20,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa time',
            weight: 7,
        },


    ]

console.log('Array di oggetti;');
console.log(bikes);



//LOGIC


let bikesWeight = 0; //Creo una variabile d'appoggio.


//Ciclo dentro il nostro oggetto
for (let i = 0; i < bikes.length; i++) {

    console.log('Sono nel ciclo for')
    bikesWeight = bikes[2]; //Seleziono l'oggetto con il valore  weight minore.
    
}

console.log(bikesWeight);
