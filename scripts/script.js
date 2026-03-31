'use strict';

/////////////////////////////////////////////////////////////
// PALINDROMA
/////////////////////////////////////////////////////////////

let parolaUtente = prompt('inserisci una parola palindroma'); //l'utente inserisce una parola

if (!parolaUtente || parolaUtente.trim() === '' ) { // !parolaUtente controlla se il valore è nullo, o stringa vuota
    console.error('HAI INSERITO UN VALORE NON VALIDO', 'RIPROVA');  // con .trim() si verifica se tolti gli spazi la stringa non sia vuota

} else { // se il prompt è stato scritto correttamente si controlla se è realmente palindroma la parola

    if (isPalindroma(parolaUtente)) { // questo if controlla che la parola dell'utente sia palindroma facendo riferimento alla funzione isPalindroma
        console.log(`bravo ${parolaUtente} è una parola palindroma`);

    } else { // se non è palindroma hai sbagliato
        console.log(`mi dispiace ${parolaUtente} non è palindroma`);

    }

}


/////////////////////////////////////////////////////////////
// numero pari e dispari
/////////////////////////////////////////////////////////////

let pariDispariGiocatore = prompt('scegli: PARI o DISPARI').toUpperCase();


if (!pariDispariGiocatore) { // se il prompt è vuoto o ha un valore null risulta errore
    console.error('NON HAI SCELTA NULLA');
    
} else { 

    let numeroGiocatore = Number(prompt('scegli un numero da 1 a 5')); // viene fatto scegliere il numero all'utente

    if (isNaN(numeroGiocatore) || numeroGiocatore < 1 ) { // se nel prompt è stato inserito un valore che non è numerico o è inferiore a 1 ERRORE
        console.error('hai inserito un numero errato o non hai inserito nulla');
        // fatto scegliere pari o dispari all'utente e il numero, si fa generare il numero al computer
    } else {
        const numeroComputer = Math.floor(Math.random() * 5 + 1);
        controllaVincitore(pariDispariGiocatore, numeroGiocatore, numeroComputer); // qui entra in gioco la funzione che sceglie il vincitore

    }

}
