/**
 * Skal have følgende felter
 * - turStartetTidspunkt: et dato objekt for hvornår turen er startet. 
 *   Hvis turen ikke er startet, er den undefined
 * - afstand: hvor langt taxaen har kørt i KM. Denne værdi sendes til scriptet
 *   udefra (i dette tilfælde fra funktionen start(Taxameter), som ligger i 
 *   library-mappen, og som er det script, der styrer applikationen).
 * 
 * Skal have følgende metoder/funktioner, som alle kaldes fra start.js
 * - startTur(): sætter turStartetTidspunkt til nuværende tidspunkt
 * - slutTur(): skal nulstille taxameteret 
 *   ved at  sætte turStartetTidspunkt til undefined og afstand til 0
 * - koer(delta_afst): skal tælle afstand op med det ekstra antal km, som
 *   bilen har kørt siden sidste beregning. 
 * - beregnPris(): skal returnere prisen beregnet udfra taxaselskabets prissætning
 */

 // Her defineres vores klasse "taxameter", hvori der laves en constructer, der henter variabler og objekter fra andre dokumenter, således at jeg kan bruge dem i dette dokument.
class Taxameter {

    constructor(priser , PrisStrategy) {
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
        this.minpris = priser.minpris;
        this.kmpris = priser.kmpris;
        this.startpris = priser.startpris;
        this.PrisStrategy = PrisStrategy;
        this.information = priser.information;

    }
    

    
// Her definere jeg datoen, hvor tidspunktet gemmes fra når man starter kørerturen.
    startTur() {
        this.turStartetTidspunkt = new Date();
    }

    // Her defineres afstanden og starttidspunktet til undefined når man stopper turen.
    slutTur() {
     this.afstand = 0;
     this.turStartetTidspunkt = undefined;




    }
// Her er funktionen "kør" defineret som gemmer delta_afst, hvilket er afstanden kørt.
    koer(delta_afst) {
    this.afstand +=delta_afst * 5;
          
    }

    // Her har jeg lavet prisberegneren, som definere forskellige variabler og laver funktionaliteten bag, hvad der skal retuneres når man starter og slutter.
    beregnPris() {
     

//Laver slut tidspunktet her, ellers kan beregningen ikke fungere, da udregningerne bliver lavet i start.js før tiden stopper.
        this.turSlutTidspunkt = new Date();
        //Her laver jeg et if statement, som spørger om tiden er startet og hvis den ikke er skal den returnere taxa informationen fra bonus opgave 1. Dette gør således at Taxa'en har alle informationerne man skal bruge før man sætter gang i turen. Teksten står ikke specielt godt placeret og skal nok lige forbedres med css
        if (this.turStartetTidspunkt == undefined){
            return 0;
            // Hvis turen er startet, så skal if statemented gå ned i en else, som så beregner prisen under turen.
        } else{ 
            // Her har jeg lavet en variable, som holder styr på tiden i sekunder, simuleres som minutter.
            var tidimin = (((this.turSlutTidspunkt-this.turStartetTidspunkt)/1000)/60);
            //Her har jeg lavet en variable, som holder styr på afstanden
            var afstandkm = this.afstand; 
            //Til sidst har jeg min prisberegning, som retuneres når turen er færdig. Her har jeg min pristrategi, som jeg har lavet i krone-taxa.js og ført ind taxameter.js, ved at lave en instans "new". Prisstrategien kommer fra kronetaxa og, prisberegningen foregår også deridne, med "tidimin" og "afstandkm" som parametre.
             
           return this.PrisStrategy.beregnPris(tidimin, afstandkm);

        }
    

    }
    
   
}

//Her laver jeg min decorator til krone taxa og kronetaxastorvogn
class SimpleTaxameterDecorator{
    //kalder min constructor med taxamter og navnene på chauføren.
    constructor(taxameter, name){
        this.taxameter = taxameter;
        this.name = name;
    
    }
//Tager afstanden fra taxamter
    get afstand() {
        return this.taxameter.afstand;
    } 
//tager tidspunktet turen starter fra taxameter
    get turStartetTidspunkt(){
        return this.taxameter.turStartetTidspunkt;
    }
//Her er starten på turen, med taxameter og så har jeg logget navnet på chauføren som fås inde i selv vognen, samt teksten at de er startet
    startTur(){
        var ting = this.taxameter.startTur();
        console.log(this.name + " Har startet tur")
        return ting;
    }
//Slutturen som logger navnet og at de har sluttet
    slutTur(){
        var ting1 = this.taxameter.slutTur();
        console.log(this.name + " Har sluttet tur")
        return ting1;
    }
    //Afstanden
    koer(delta_afstand){
        return this.taxameter.koer(delta_afstand);
    }
//Prisberegneren
    beregnPris(){
        return this.taxameter.beregnPris();
    }
}

//her er decoratoren til statestiken
class KronestatestikDecorator{
    //her har jeg lavet min normal ture og korteture. 
    constructor(taxameter, name){
        this.korteture = 0;
        this.ture = 0;
        
        this.taxameter = taxameter;
        this.name = name;
    
    }

    get afstand() {
        return this.taxameter.afstand;
    } 

    get turStartetTidspunkt(){
        return this.taxameter.turStartetTidspunkt;
    }

    startTur(){
        this.taxameter.startTur();
    }
//Her tjekker vi turene og hvis afstanden er under 1 km så bliver den sat som en kort tur. 
    slutTur(){
       this.ture++;
       if(this.taxameter.afstand < 1){
           this.korteture++;
       }
        this.taxameter.slutTur();
        this.statestik();
      

    }
//Her har jeg en beregner som tjekker om turen er kort eller lang. Den logger det derefter så man kan se det
    statestik(){
        var pct = (this.korteture*100)/this.ture;
        console.log(Math.round(pct) + "% af turene er korte")

    }
    koer(delta_afstand){
        return this.taxameter.koer(delta_afstand);
    }

    beregnPris(){
        return this.taxameter.beregnPris();
    }
}



