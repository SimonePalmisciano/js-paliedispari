'use strict';

//funzione che inverte le parole di una stringa
function invertiParola(parola) {
    let invertita = ''; // variabile dichiarata che ha vita solo nello scope della funzione attuale

    for (let z = parola.length - 1; z >= 0; z--) { // questo ciclo for si occupa di prendedere i caratteri dalla fine all'inizio
        invertita += parola[z]; // e qui vengono messi 1 alla volta nella variabile 'invertita' 

    }
    return invertita; // return restituisce ciò che è stato assegnato alla variabile 'invertita' a chi sta chiamando la funzione
}

function isPalindroma(parola) { // funziona che controlla se una parola è palindroma
    let parolaInvertita = invertiParola(parola); // viene dichiarata e assegnato il valore della funzione 'invertiParola' e qui è citata
    // quindi viene fatto riferimento a quella funzione che inverte la parola
    return parola === parolaInvertita; // viene restituito il valore di 'parolaInvertita' a chi sta chiamando la funzione

}

// controlla se il numero è pari
function isPari(numero) {
    return numero % 2 === 0; // viene restituito un valore, true se è pari false se è dispari, a chi sta chiamando la funzione
}

//controlla chi è il vincitore del pari o dispari
function controllaVincitore(sceltaGiocatore, numeroGiocatore, numeroComputer) { // ho assegnato questi paramentri perchè ho tanta fantasia
const somma = numeroGiocatore + numeroComputer; // dichiariamo e assegniamo una variabile con la somma dei 2 numeri che saranno dati dal valore
 // che gli saranno dati nel momento in cui viene chiamata la funzione es.
 // controllaVincitore (pari, 2, 3)
 //sarà come se ho scritto somma = 2 + 3

    const sommaPari = isPari(somma); // dichiarata e assegnata altra varibile con richiamo alla funzione 'isPari' con il parametro somma che sostituisce (numero)

    if (sceltaGiocatore === 'PARI' && sommaPari) { // si verifica la scelta del giocatore se è pari
        console.log('complimenti hai vinto con il PARI');

    } else if (sceltaGiocatore === 'DISPARI' && !sommaPari) { // si verifica se è dispari
        console.log('complimenti hai vinto con il DISPARI');

    } else {
        console.error('HAI PERSO');

    }
}