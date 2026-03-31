'use stricyt';

let parolaUtente = prompt('inserisci una parola palindroma'); //l'utente inserisce una parola

let stringaInvertita = ''; // qui invertiamo la parola inserita dall'utente

// while (typeof(parolaUtente) !== 'string' || parolaUtente === '') { // volevo fare un controllo se la stringa
//     console.log('mi dispiace non hai inserito una stringa');       // fosse vuota rifarei il controllo

// }

function invertiParola() { //funzione che inverte le parole di una stringa

    for (let z = parolaUtente.length - 1; z >= 0; z--) { // questo ciclo for si occupa di prendedere
        //dall'ultima lettera della parola dell'utente alla prima
        const carattere = parolaUtente[z]; // la const dichiarata come carattere prende ogni carattere
        //della parola 

        stringaInvertita += carattere; // e qui viene inserita nella stringaInvertita lettera per lettera

    }
}

function isPalindroma() { // funziona che controlla se una parola è palindroma

    if (parolaUtente === stringaInvertita) { // questo if controlla che la parola dell'utente sia palindroma
        console.log(`bravo ${stringaInvertita} è una parola palindroma`);

    } else {
        console.log(`mi dispiace ${parolaUtente} non è palindroma`);

    }

}


/////////////////////////////////////////////////////////////
// numero pari e dispari
/////////////////////////////////////////////////////////////


// l'utente deve scegliere se pari o dispari 
let pariDispariGiocatore = prompt('scegli: PARI o DISPARI').toUpperCase;

// utente deve scegliere un numero da 1 a 5
numeroGiocatore = Number(prompt('scegli un numero da 1 a 5'));

// il computer genera un numero da 1 a 5 in modo casuale
numeroComputer = Math.floor(Math.random() * 5 + 1);

// qui i numeri scelti dai partecipanti si sommeranno
let somma = numeroGiocatore + numeroComputer;

console.log(numeroGiocatore);
console.log(numeroComputer);
console.log(somma);

function controlloPariDispari() {

    if (pariDispariGiocatore === 'PARI' && somma % 2 === 0) {
        console.log('complimenti hai vinto con il PARI');

    } else if (pariDispariGiocatore === 'DISPARI' && somma % 2 !== 0) {
        console.log('complimenti hai vinto con il DISPARI');

    } else {
        console.error('HAI PERSO');

    }

}
