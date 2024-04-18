//Variabili
/*
let tariffaKM = prompt ("Inserisci il tuo nome: ");
let sconti = prompt ("Inserisci il tuo colore preferito: ");

//Variabile password
let  = "La tua password è: " + NomeUtente + CognomeUtente + ColorePreferito + "#24";

document.getElementById("titolo").innerHTML = ("La tua password è: " + NomeUtente + CognomeUtente + ColorePreferito + "#24"); //primo caso che ho fatto

alert(password24); //nel caso dell'alert (l'ho fatto al contrario rispetto all'ordine che ha dato Luca)
*/

// Variabili
// const NomeCognome = prompt ("Inserisci il tuo nome e il tuo cognome")
// const distanzaKM = prompt ("Inserisci la distanza (in KM): ");
// const eta = prompt ("Inserisci la tua età: ");



/*

const costoKM = 100

let prezzo = costoKM * distanzaKM

// Sconti minorenni
if (eta<18){
    prezzo = (80 / 100) * prezzo;
}
// Sconti senior
if (eta>65){
    prezzo = (60 / 100) * prezzo;
}

//Prezzo finale, con massimo due numeri dopo la virgola
prezzofin = prezzo.toFixed(2);

//Stampa
console.log(`La quota da pagare, per poter viaggire è di: ${prezzofin} Euro.`);
document.getElementById("titolo").innerHTML = (`Il prezzo da pagare è: ${prezzofin} Euro.`);

*/






//Button genera
const myButton = document.getElementById('genera');
//Variabili costanti (?)
const kmInput = document.querySelector('#km');
const FirstSecondName = document.getElementById('fullname')
const Age = document.getElementById("age")

myButton.addEventListener('click', function() {
    // alert('Hai vinto!');
    console.log('ASINCRONO', 'kmInput.value', kmInput.value, typeof kmInput.value);
    console.log(parseInt(kmInput.value), typeof parseInt(kmInput.value));
    console.log(parseFloat(kmInput.value), typeof parseFloat(kmInput.value));

    console.log((FirstSecondName.value), typeof FirstSecondName, "FirstSecondName");
    console.log(Age.value);

    const ticketName = FirstSecondName;
    const ticketOfferta = Age;
    const ticketPrice = document.getElementById("age");

    const TicketName = document.getElementById("ticket_name");
    TicketName.innerHTML = FirstSecondName.value;

    

});