
//Objektet med opdaterede information omkring taxa'en
var priser = {
    kmpris:4.50,
    minpris: 7, 
    startpris: 75,
    information: "Velkommen til City-bilen. Her koster turen, 4,50kr pr kilometer og herefter ,samt 7kr pr minut og 75 for at starte. Nyd turen!",
   }
   //Strategien, som udregner prisen for city-bilen.
    class TaxaPrisStrategy{
        constructor(priser){
        this.priser = priser
        }

        beregnPris(tidimin, afstandkm){
           return (((this.priser.kmpris*(Math.floor(afstandkm)+1))+(this.priser.minpris*tidimin))+this.priser.startpris);
        }
    }


    //sætter mine klasser ind i taxameter.
start(new Taxameter(priser, new TaxaPrisStrategy(priser)));