class Memoria{
    constructor (){
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = null;
        this.secondCard = null;
    }

    elements = [{
            element: "Alpine",
            source: "multimedia/imagenes/Alpine_F1_Team_2021_Logo.svg"},
        {
            element: "Alpine",
            source: "multimedia/imagenes/Alpine_F1_Team_2021_Logo.svg"},
        {
            element: "Aston Martin",
            source: "multimedia/imagenes/Aston_Martin_Aramco_Cognizant_F1.svg"},
        {
            element: "Aston Martin",
            source: "multimedia/imagenes/Aston_Martin_Aramco_Cognizant_F1.svg"},
        {
            element: "McLaren",
            source: "multimedia/imagenes/McLaren_Racing_logo.svg"},
        {
            element: "McLaren",
            source: "multimedia/imagenes/McLaren_Racing_logo.svg"},
        {
            element: "Mercedes",
            source: "multimedia/imagenes/Mercedes_AMG_Petronas_F1_Logo.svg"},
        {
            element: "Mercedes",
            source: "multimedia/imagenes/Mercedes_AMG_Petronas_F1_Logo.svg"},
        {
            element: "Red Bull",
            source: "multimedia/imagenes/Red_Bull_Racing_logo.svg"},
        {
            element: "Red Bull",
            source: "multimedia/imagenes/Red_Bull_Racing_logo.svg"},
        {
            element: "Ferrari",
            source: "multimedia/imagenes/Scuderia_Ferrari_Logo.svg"},
        {
            element: "Ferrari",
            source: "multimedia/imagenes/Scuderia_Ferrari_Logo.svg"}
    ]        
        
    shuffleElements(){
        for (let i = this.elements.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
        }
    }

    unflipCards(){
        this.lockBoard = true;
        this.firstCard.removeAttribute("data-state");
        this.secondCard.removeAttribute("data-state");
        setTimeout(() => {
            this.resetBoard(); 
        }, 500);
    }

    resetBoard(){
        this.firstCard = null;
        this.secondCard = null;
        this.hasFlippedCard = false;
        this.lockBoard = false;
    }

    checkForMatch(){
        this.firstCard.dataset.element === this.secondCard.dataset.element
        ? this.disableCards()
        :   setTimeout(() => {
                this.unflipCards();
            }, 1000);
    }

    disableCards(){
        this.firstCard.dataset.state = "revealed";
        this.secondCard.dataset.state = "revealed";
        this.resetBoard();
    }

    flipCard(memoria) {
        if(memoria.lockBoard == false 
            && this.dataset.state !== "revealed"
            && this.dataset.state !== "flip" ){
            this.setAttribute("data-state", "flip");
            setTimeout(() => {
                if(this.dataset.state==="flip" 
                    && memory.secondCard === null){
                    this.removeAttribute("data-state");
                    memory.resetBoard();
                }
            }, 4000);

            if (memoria.hasFlippedCard) {
                memoria.lockBoard = true;
                memoria.secondCard = this;
                memoria.checkForMatch();
            } else {
                memoria.firstCard = this;
                memoria.hasFlippedCard = true;
            }
        }
    }

    addEventListeners(){
        document.querySelectorAll("article").forEach(card =>{
            card.onclick = this.flipCard.bind(card, this);
        });
    }

    createElements(){
        this.shuffleElements();

        this.elements.forEach( card => {
            var article = document.createElement("article");
            article.setAttribute("data-element", card.element);

            var header = document.createElement("h3")
            header.textContent = "Tarjeta de memoria" ;

            var imagen = document.createElement("img");
            imagen.setAttribute("src", card.source);
            imagen.setAttribute("alt", card.element);

            article.appendChild(header);
            article.appendChild(imagen);

            var section = document.querySelector("section");
            section.appendChild(article);
        })

    }
}

