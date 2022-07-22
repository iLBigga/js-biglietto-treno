// Indico tag in html
const textPrice = document.getElementById('prezzo')
console.log(textPrice)
const textRedSale = document.getElementById('red_sale')
const textGreenSale = document.getElementById('green_sale')
//Quanto è il prezzo del biglioetto per Km?
const price = 0.21
//Quanti anni hai? 
const utentAge = parseInt( prompt('Quanti anni hai?'))
//Quanti km devi percorrere?
const utentKm = parseInt( prompt('Quanti Chilometri devi percorrere?'))
// Calcolo Prezzo * Km
const kmPrice = price * utentKm 
// inserisco testo
const yourPrice = 'Il tuo prezzo è di '
// inserisco testo sconto
const yourRateYoung = 'Sconto 20%'
const yourRateOver = 'Sconto 50%'

if (utentAge < 18) {//SE Persona ha meno di 18 anni
    // Sconto 20%
    const youngSale = kmPrice - (kmPrice * 0.2) 
    textGreenSale.innerHTML = yourRateYoung
    textPrice.innerHTML = yourPrice + youngSale.toFixed(2) + '€'
} else if (utentAge > 64) { //ALTRIMENTI  SE Persona ha >= 65 
     // Sconto 40%
    const overSale = kmPrice - (kmPrice * 0.5) 
    textGreenSale.innerHTML = yourRateOver
    textPrice.innerHTML = yourPrice + overSale.toFixed(2) + '€'
} else { // ALTRIMENTI
    // nessuno sconto
    textRedSale.innerHTML = 'Sconto non applicato'
    textPrice.innerHTML = yourPrice + kmPrice.toFixed(2) + '€'
}



// Console log
// console.log(utentAge, utentKm, kmPrice)