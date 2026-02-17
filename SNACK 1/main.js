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
-Stampo e loggo la variabile d'appoggio.
-stampo a schermo la variabile d'appoggio.

*/


//DATA
const mainEl = document.querySelector('main') //Seleziono il nodo che corrisponde a 'main' nel documento
//console.log(mainEl);

const bikes = //Creare un array

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
            name: 'Bici da corsa Bixxis',
            weight: 6,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da crosa Crisp',
            weight: 8,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Decathlon',
            weight: 12,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Pasculli',
            weight: 9,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Vitus',
            weight: 5,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Trek',
            weight: 20,
        },

        { //Ogni oggetto deve avere 2 chiavi: name e weight.
            name: 'Bici da corsa Time',
            weight: 7,
        },


    ]

//console.log('Array di oggetti;');
//console.log(bikes);



//LOGIC


let bikesWeight = 0; //Creo una variabile d'appoggio.


//Ciclo dentro il nostro oggetto
for (let i = 0; i < bikes.length; i++) {

    //console.log('Sono nel ciclo for')
    bikesWeight = bikes[2]; //Seleziono l'oggetto con il valore  weight minore.

}

console.log(bikesWeight); //Stampo e loggo la variabile d'appoggio.
//console.log(bikesWeight.weight); 


//Stampo a schermo la variabile d'appoggio. (che contine il nostro oggetto)
//Seleziono l'elemento e ci aggiungo la proprieta inner.HTML, 
// in cui ci aggiungo del markup interpolando i valori delle chiavi dell'oggetto seleziona nella variabile d'appoggio.
mainEl.innerHTML = ` 

<h2>La bici più leggera è la: ${bikesWeight.name}</h2>
        <p>La bici pesa solo: ${bikesWeight.weight} kg.</p>



`

