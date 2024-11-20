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
const people = ["Tony","Christian","Håkon"]

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}


/*
    Oppgave: A
    Skriv kode som skriver ut settningen "Debuging er som å være en dektektiv i et krim drama hvor du også er morderen" 
    100 ganger. 
    Husk vi bruker console.log() til å skrive ting ut.
*/
console.log("Oppgave: A");

const oppg1Max = 100;

for ( let index = 1; index <= oppg1Max; index++) {
    console.log(index + " Debuging er som å være en dektektiv i et krim drama hvor du også er morderen ");
} 



/*
    Oppgave: B
    Følgende kode er feil, kan du fikse feilene?
    Denne er ikke helt enkel, det er syntax feil her og logiske feil.
    Prøv å tenke på hva vi prøver å oppnå.
*/
console.log("Oppgave: B");

const max = 9; //99
for (let index = max; index > 0; index--) {
  console.log(index + " flasker med brus i kassa");
  console.log(index + " flasker med brus i kassa");

  console.log(
    "Ta en ut, drikk den opp. " + (index - 1) + " flasker med brus i kassa"
  );
  console.log("");
}

console.log("Ingen flere flasker med brus i kassa");


/*
    Oppgave: C
    Deklarere en variabel for tyngdekraft og en variabel for pi og en variabel for antall personer i et rom. 
*/
console.log("Oppgave: C");

const PI = 3.14;
const tyngdekraft = 9.81;
let  personerIRom = 3;




/*
    Oppgave: D
    Lag en funksjon som legger sammen to tall, funksjonen skal hete add
*/
console.log("Oppgave: D");

// lag funksjonen din her. 

function add (nummer1 , nummer2) {
    return nummer1 + nummer2;
}


console.log("3 + 6 = " + add(3,6));
console.log("5673 + 234 = " + add(5673,234));

/*
    Oppgave: E
    Bruk variabelen people fra eksempelet og skriv navna ut i reversert rekke følge (bruk en løkke)
    NB du skal ikke endre på people, bare bruke det som den inneholder.
*/
console.log("Oppgave: E");

const peoples = ["Tony","Christian","Håkon"]

for(let index = peoples.length - 1; index >= 0; index--){
    let person = peoples[index];
    console.log(person);
}

/* sammenligning ^^

const people = ["Tony","Christian","Håkon"]

for(let index = 0; index < people.length; index++){
    let person = people[index];
    console.log(person);
}
    måtte søke dette opp. skjønnte ikke helt hvordan revers funket.
*/



/*
    Oppgave: F
    Deklarere en variabel for en liste med telefon nummer. Listen din skal ha minst 3 nummer. 
*/
console.log("Oppgave: F");

let tlfNumbers = ("49807635" , "40438765" , "45762398"); 

console.log (tlfNumbers);


/*
    Oppgave: G
    Skriv ut bare det siste telefon numeret i listen din. 
*/
console.log("Oppgave: G");

const tlfNumber = ["49807635" , "40438765" , "45762398"]

console.log (tlfNumber[tlfNumber.length - 1]);





/*
    Oppgave: H
    Skriv ut kunn etternavnene for personene i listen, bruk en løkke.
*/
console.log("Oppgave: H");

const personer = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]

for (let i = 0; i < personer.length; i++) {
    console.log(personer[i][1]);
}



//let personer = [["Christian", "Simonsen"], ["Tony", "Bergholtz"]]
