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




// ! ESERCIZO 2

/*
1-Creo array;
2- Prendo elementi dal dom
3- confornto la lista a pressione bottone
4- Recupero valore inserito
5- stampo messaggio


*/

//1-Creo array;

const eMail = ['sergio@gmail.com','sara@gmail.com','marco@gmail.com','patrizio@gmail.com','mario@gmail.com'];

//2- Prendo elementi dal dom

const digitatedEmail = document.getElementById('email');
const validButton = document.getElementById('valid-button');
const validation = document.getElementById('validation');



//3- confornto la lista a pressione botton

validButton.addEventListener('click', function(){

    // 4- Recupero valore inserito
    const userMail = digitatedEmail.value.trim();

       //validazione
       if(!userMail){
        validation.innerText = 'NON HAI INSERITO ALCUNA MAIL';
        return;
       }

    let isValid = false;

for (let i = 0 ; i < eMail.length && !isValid ; i++){
   if(eMail[i] === userMail){
     isValid = true;
   }



//5- stampo messaggio
validation.innerText = isValid ? 'AUTORIZZATO' : 'NON AUTORIZZATO';
}



});