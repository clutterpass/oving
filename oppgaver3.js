/*
    Hei.
    Dette er et oppgave sett i MM-912.
    Meningen er å trene på et fåtall ting av gangen. 
    Du gjør dette ved å skrive inn ditt svar etter at en oppgave er gitt (se på eksempelet)

    IKKE endre på kode som er gitt, med mindre oppgaven spesefikt sier at du skal det
*/

/*
    Oppgave: Eksempel
    Skriv koden for å skrive ut alle navnene i listen, et navn per linje
*/
console.log("Oppgave: Eksempel");
const people = ["Tony","Christian","Håkon"];

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}

/*
    Oppgave: A
    Lag variabler for:
    * Timer i døgnet
    * Minutter i en time
    * Sekunder i et minutt
    * forholdet mellom vann og saft når man blander saft.
    * dager til din bursdag
    * mmilimeter regn som faller 
*/
console.log("Oppgave: A");

const timerIDøgn = 24;

const minutterITime = 60;

const sekunderIMinutt = 60;

let forholdVannSaft = 0.25;

let dagerTilMinBursdag = 14;

let mmRegnFall = 5;



/*
    Oppgave: B
    Bruk variablene dine fra oppgave A og kalkuler:
    * Hvor Mange sekunder er det i 2.5 timer?
    * Hvor mange minutter er det i 123 dager?
    Husk å sette svarene til sine egne variabler
    Eks:
    // Hvor mange dl er 4.5 coups?
    const dlInCoups = 2.36588;
    const antallDL = dlInCoups * 4.5;
*/
console.log("Oppgave: B");

let hourToConvert = 2.5;

let daysToConvert = 123;

const sekunderItimer = sekunderIMinutt * minutterITime * hourToConvert;

const minutterIDager = minutterITime * timerIDøgn * daysToConvert;

console.log ("Hvor Mange sekunder er det i 2.5 timer?");

console.log ("svaret er " , sekunderItimer) 

console.log ("Hvor mange minutter er det i 123 dager?");

console.log ("svaret er " , minutterIDager)

/*
    Oppgave: C
    Bruk en løkke (for) til å skrive ut tallene fra 1 til 10 
*/
console.log("Oppgave: C");

const oppgCMax = 10;

for (let i = 1; i <= oppgCMax; i++) {

    console.log (i);
}


/*
    Oppgave: D
    Bruk en løkke (for) til å skrive ut tallene fra 10 til 1
*/
console.log("Oppgave: D");

const oppgDMax = 10;

for ( let i = oppgDMax; i >= 1; i--) {
    
    console.log (i);
}


/*
    Oppgave: E
    Denne er litt vanskligere, men du klarer den ;)
    Bruk en løkke (for) til å skrive ut partallene mellom 1 og 100
*/
console.log("Oppgave: E");

const oppgEMax = 100;

for ( i = 2; i <= oppgEMax; i = i+2 ) {

    console.log (i);
}



/*    const oppgCMax = 10;

    for (let i = 1; i <= oppgCMax; i++) {
    
        console.log (i);
    }


*/
/*
    Oppgave: F
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: F");

const DICTIONARY = {
    hello:"Hei på deg",
    howAreYou:"hvordan står det til?",
    goodQuestionsLately: "Fått noen gode spørsmål i det siste?"
}

console.log(`${DICTIONARY.hello} Christian ${DICTIONARY.howAreYou}`); //-> Hei på deg Christian, hvordan står det til?
console.log(`${DICTIONARY.goodQuestionsLately}`) //-> Fått noen gode spørsmål i det siste?


/*
    Oppgave: G
    Fyll inn koden som skal til for å få følgende kode til å skrive ut det som er forventet.
*/
console.log("Oppgave: G");

const DICTIONARY_ML = {
    no:{
        hello:"Hei på deg",
        howAreYou:"hvordan står det til?",
        goodQuestionsLately: "Fått noen gode spørsmål i det siste?"
    },

    en:{
        hello: "Hi",
        howAreYou:"how are you?",
        goodQuestionsLately:"Gotten any good questions lately?"

    }
}

console.log(`${DICTIONARY_ML.en.hello} Christian ${DICTIONARY_ML.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.en.goodQuestionsLately}`) //-> Gotten anny good questions latly?

