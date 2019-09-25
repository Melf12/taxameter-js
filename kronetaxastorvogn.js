
//Her har jeg mit objekt med information
var priser = {
    kmpris:12,
    minpris: 6.67, 
    startpris: 69,

    information: "Velkommen til krone-taxaStorVogn. Her koster turen, 12kr pr kilometer, samt 6,67kr pr minut og 69 for at starte. Nyd turen!",
   }

//Min klasse, som er identisk med klassen i krone-taxa bare med ændrede priser fra objekter.
    class TaxaPrisStrategy{
        constructor(priser){
        this.priser = priser
        }

        beregnPris(tidimin, afstandkm){
            
           return (this.priser.kmpris*afstandkm)+(this.priser.minpris*(tidimin))+this.priser.startpris;
        }
    }

//Her sætter jeg min strategi ind i taxameter, som så styrer det.
start(new Taxameter(priser, new TaxaPrisStrategy(priser)));