//chiedo all'utente kmNumber e passengerAge attraverso il prompt (in parseInt)
    //il prezzo del biglietto ticketPrice è definitio da kmNumber * kmPrice (0,21 centesimi di euro)
    //sconto del 20% ((ticketPrice * 20) / 100 = discountUnder18 ) if passengerAge è < di 18
    //sconto del 40% ((ticketPrice * 40) / 100 = discountOver65 ) if passengerAge è > di 65
    //altrimenti ticketPrice è il prezzo da pagare
// A questo punto sottraggo da ticketPrice il discount (ticketPrice - discount) e ottengo
//discountedTicketPrice

const kmNumber = parseInt (prompt('Inserisci qui il numero dei chilometri che farai'));
const passengerAge = parseInt(prompt('Inserisci qui il l\'età'));
const kmPrice = 0.21;
const ticketPrice = kmNumber * kmPrice;
const discountUnder18 = ((ticketPrice * 20) / 100);
const discountOver65 = ((ticketPrice * 40) / 100);



console.log(kmPrice, kmNumber, passengerAge, ticketPrice, discountUnder18, discountOver65);
console.warn(typeof kmPrice, kmNumber, passengerAge, ticketPrice, discountUnder18, discountOver65);