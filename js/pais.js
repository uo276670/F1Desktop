class Pais {
    constructor (pais, capital, población){
        this.pais = pais;
        this.capital = capital;
        this.población = población;
    }

    setInfo(longitudm, latitudm, altitudm, circuito, forma_gobierno, religion_mayoritaria){
        this.longitudm = longitudm;
        this.latitudm = latitudm;
        this.altitudm = altitudm;

        this.circuito = circuito;
        this.forma_gobierno = forma_gobierno;
        this. religion_mayoritaria = religion_mayoritaria;
    }
    
    getPais(){
        return this.pais;
    }

    getCapital(){
        return this.capital;
    }

    getInfoGeneral(){
        return  "<ul>" + 
        "<li> Nombre de la pista: " + this.circuito + "</li>" + 
        "<li> Población de Qatar: " + this.población + " habitantes</li>" +
        "<li> Forma de gobierno: " + this.forma_gobierno  + "</li>" +
        "<li> Religión mayoritaria: " + this.religion_mayoritaria + "</li>"
        +"</ul>";
        
    }
    getMeta(){
        document.write("<p>" + this.longitudm + " : " +this.latitudm + " : " + this.altitudm + "</p>");
    }
}