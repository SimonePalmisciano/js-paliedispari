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

if (parolaUtente === stringaInvertita) { // questo if controlla che la parola dell'utente sia palindroma
    console.log(`bravo ${stringaInvertita} è una parola palindroma`);

} else {
    console.log(`mi dispiace ${parolaUtente} non è palindroma`);

}


/////////////////////////////////////////////////////////////
// numero pari e dispari
/////////////////////////////////////////////////////////////

// let numeroGiocatore = 0;
// let numeroComputer = 0;

// let pariDispariGiocatore = prompt('scegli: PARI o DISPARI').toUpperCase;

// if (pariDispariGiocatore === 'PARI') {
//     let sceltaPari = prompt('scegli un numero tra: 2 e 4')

//     if (sceltaPari % 2 === 0) {
//         console.log('');

//     } else {
//         console.log('inserisci un numero PARI');

//     }
// }

// for (let z = 0; z < array.length; z++) {
//     const element = array[z];

// }
// numeroGiocatore = Number(prompt('scegli un numero'));

// numeroComputer = Math.floor(Math.random() * 5 + 1);

// console.log(numeroComputer);