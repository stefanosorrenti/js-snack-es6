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
-Inserisco 10 oggetti
-Ogni oggetto deve avere 2 chiavi: nome e peso.
-Creo una variabile d'appoggio.
-Seleziono la CHIAVE peso di ciascun oggetto 
    -SE il VALORE della chiave peso è più basso degli altri valori delle chavi
        -pusho in una variabile d'appoggio
    -ALTRIMENTI
        -Non pusho.

-Stampo la variabile d'appoggio.

*/

//Creare un array
const bikes =

    [ //Inserisco 10 oggetti

        { //Ogni oggetto deve avere 2 chiavi: name e peso.
            name: 'Bici da città',
            weight: 10,
        },
        
        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Mountain bike',
            weight: 15,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa',
            weight: 3,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da cicloturismo',
            weight: 6,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici ibrida',
            weight: 8,
        },
        
        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici a scatto fisso',
            weight: 12,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici pieghevole',
            weight: 9,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da ciclocross',
            weight: 5,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici elettrica',
            weight: 20,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici per bambini',
            weight: 7,
        },


    ]

console.log('Array di oggetti;');
console.log(bikes);


