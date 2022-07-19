// Primo File Javascript


// Dichiarazione + Assegnazione nome Variabile inline
// Con il comando prompt interagisco con l'utente tramite browser

let myName = prompt('Mi daresti il tuo nome?');
let mySurname = prompt('Ora il tuo cognome?');
let myColor = prompt('Il tuo colore preferito?');

// Assegnazione nome Variabile inline

// Con questo comando inserisce un numero Random
const myNumber = Math.random( );

console.log (myName + mySurname + myColor)


// Recupero elemento dal codice HTML in cui andremo a stampare il messaggio
const password = document.getElementById('password')

console.dir(password)
// Stampa del contenuto

password.innerHTML = myName + mySurname + myColor + myNumber









