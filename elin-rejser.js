//Legede lidt med sidste opgave, men er lidt lost på den.

/*var priser = {
    kmpris1: 5,
    minpris: 6.50, 
    startpris: 39,
    kmpris2 : 9.50,
    kmpris4:4.50,
    minpris2: 7, 
    startpris2: 75,
    kmpris5:12,
    minpris3: 6.67, 
    startpris3: 69,

    information: "Velkommen til Elin-Rejser",
   }
    
    
    // Her har jeg lavet en klasse, som skal styre prisen for krone-taxa.
    class TaxaPrisStrategy1{
        //Først har jeg lavet en constructor, hvor jeg har smidt mit objekt "priser" ind og definere dem.
        constructor(priser){
        this.priser = priser
        }
// Her står formlen for at beregne prisen, som sker i taxameter.
        beregnPris1(tidimin, afstandkm){
// Jeg starter med at tjekke om der er kørt over 1 km, pga opgave 3. Formlen tager produktet af kmprisen og afstanden, hvor den så addere produktet mellem minutprisen og tiden kørt og til sidst addere, start pris. Således får man hele prisen med.
          if(afstandkm < 1){
           return this.priser.kmpris1*afstandkm+(this.priser.minpris*tidimin)+this.priser.startpris;
          } else{
           return this.priser.kmpris2*afstandkm+(this.priser.minpris*tidimin)+this.priser.startpris;
          }
        }
    }

    
   //Strategien, som udregner prisen for city-bilen.
   class TaxaPrisStrategy2{
    constructor(priser){
    this.priser = priser
    }

    beregnPris2(tidimin, afstandkm){
       return (((this.priser.kmpris*(Math.floor(afstandkm)+1))+(this.priser.minpris2*tidimin))+this.priser.startpris2);
    }
}

class TaxaPrisStrategy3{
    constructor(priser){
    this.priser = priser
    }

    beregnPris3(tidimin, afstandkm){
       return (((this.priser.kmpris*(Math.floor(afstandkm)+1))+(this.priser.minpris3*tidimin))+this.priser.startpris3);
    }
}








// Til sidst laver vi en instans af taxameter og sætter objektet priser ind og vores klasse med prisberegneren, som også har objektet i sig.
start(new Taxameter(priser, new TaxaPrisStrategy(priser), new TaxaPrisStrategy2(priser), new TaxaPrisStrategy3(priser)));
   


*/