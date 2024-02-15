


function askNumber(nbPetit, nbGrand){
    let givenNumber =-1
    while (givenNumber> nbGrand || givenNumber< nbPetit) {
    givenNumber = prompt("Choisissez un nombre entre " + nbPetit + "< ? <" + nbGrand + " :")
    
    }
    return givenNumber
}

function didIWin(nombreADeviner){
    let nbTentative = 0
    let nbPetit = 0
    let nbGrand = 50
   
    let givenNumber = askNumber(nbPetit,nbGrand)
    while (givenNumber!=nombreADeviner){
        if (givenNumber>nombreADeviner){
            nbTentative++
            if (givenNumber<nbGrand){
                nbGrand = givenNumber}
            console.log("Plus petit")
            alert("Faux réessaie")
            givenNumber=askNumber(nbPetit,nbGrand)
        } else {
            nbTentative++
            if (givenNumber>nbPetit){
                nbPetit = givenNumber}
           
            console.log("Plus grand")
            alert("Faux réessaie")
            givenNumber=askNumber(nbPetit,nbGrand)
        }
       
    }
    nbTentative++
    alert("Bravo tu as trouvé le bon nombre en " + nbTentative + " tentative(s) !")
    console.log("bravo") 

}

function gamePlay(){
    let nbPetit = 0
    let nbGrand = 50
    const nombreADeviner = askNumber(nbPetit,nbGrand)
    console.log("nombre à deviner :" + nombreADeviner)
    
    //console.log("givenNumber:" + givenNumber)
    didIWin(nombreADeviner)


    
}