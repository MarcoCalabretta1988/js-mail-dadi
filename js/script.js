console.log ('JS OK');

//ESERCIZIO 1 - Gioco dei dadi
/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/



// ! ESERCIZIO 1
/*
1- Prendo Elementi dal dom
2- Creo evento a pressione bottone
3- creo due variabili randomiche
4-le confronto
5-stampo vincitore
*/

// Prendo Elementi dal dom

const userThrow = document.getElementById('user-throw');
const pcThrow = document.getElementById('pc-throw');
const winner = document.getElementById('winner');
const throwButton = document.getElementById('throw-button');


console.log(userThrow,pcThrow);
//2- Creo evento a pressione bottone

throwButton.addEventListener ('click', function(){

//3- creo due variabili randomiche
const userNumber = Math.floor(Math.random() * 6) +1;
const pcNumber = Math.floor(Math.random() * 6) +1;
let winMessage = 'PAREGGIO!';

//4-le confronto
if ( userNumber < pcNumber){
    winMessage = 'PC WINS!';
}
else if (userNumber > pcNumber){
    winMessage = 'YOU WIN!';
}

//5-stampo vincitore
userThrow.innerText = userNumber;
pcThrow.innerText = pcNumber;
winner.innerText = winMessage ;



});