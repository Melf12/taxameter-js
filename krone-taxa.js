/*class Realclock{
    now(){

        return new Date();
    }
}

class FakeClock{
    constructor(){
        this.time = new Date();
    }
    now(){
    return this.time;
    }
    forward(minutter){
        this.time.setMinutes(this.time.detMinutes()+minutter)
    }
}
var clock = new Realclock();*/
//var clock = new clock()

// Ur som jeg aldrig fik brugt

/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */

 //Jeg har valgt at lave et objekt som skal holde styr på alle priserne, samt informationer til de forskellige taxaer. Det har jeg gjort til alle taxaerne, da jeg synes det var overskueligt.
 var priser = {
     kmpris1: 5,
     minpris: 6.50, 
     startpris: 39,
     kmpris2 : 9.50,
     //Her står den information, som kunderne skal bruge før de kører med taxaen. Jeg har ændret lidt inde i start.js for at få det til at fungere.
     information: "Velkommen til krone-taxa. Her koster turen, 5kr for første kilometer og herefter 9,50kr på kilometer, samt 6,50kr pr minut og 39 for at starte. Nyd turen!",
    }
     
     
     // Her har jeg lavet en klasse, som skal styre prisen for krone-taxa.
     class TaxaPrisStrategy{
         //Først har jeg lavet en constructor, hvor jeg har smidt mit objekt "priser" ind og definere dem.
         constructor(priser){
         this.priser = priser
         }
// Her står formlen for at beregne prisen, som sker i taxameter.
         beregnPris(tidimin, afstandkm){
// Jeg starter med at tjekke om der er kørt over 1 km, pga opgave 3. Formlen tager produktet af kmprisen og afstanden, hvor den så addere produktet mellem minutprisen og tiden kørt og til sidst addere, start pris. Således får man hele prisen med.
           if(afstandkm < 1){
            return this.priser.kmpris1*afstandkm+(this.priser.minpris*tidimin)+this.priser.startpris;
           } else{
            return this.priser.kmpris2*afstandkm+(this.priser.minpris*tidimin)+this.priser.startpris;
           }
         }
     }

// Til sidst laver vi en instans af taxameter og sætter objektet priser ind og vores klasse med prisberegneren, som også har objektet i sig.
start(new Taxameter(priser, new TaxaPrisStrategy(priser)));