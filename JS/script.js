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
let ticketPrice = kmNumber * kmPrice;


if (passengerAge < 18) {
    let discount = ((ticketPrice * 20) / 100);
    let discountedTicketPrice = ticketPrice - discount;
    let discountedPrice = discountedTicketPrice.toFixed(2);
    console.log(discountedPrice)

} else if (passengerAge > 65) {
    let discount = ((ticketPrice * 40) / 100);
    let discountedTicketPrice = ticketPrice - discount;
    let discountedPrice = discountedTicketPrice.toFixed(2);
    console.log(discountedPrice)

} else {
    let basePrice = ticketPrice.toFixed(2);
    console.log(basePrice);
}