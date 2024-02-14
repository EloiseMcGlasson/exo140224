


function askNumber(){
    let givenNumber =101
    while (givenNumber> 50 || givenNumber< 0) {
    givenNumber = prompt("Choisissez un nombre entre 0 et 50 :")
    
    }
    return givenNumber
}

function didIWin(nombreADeviner){
    
    let givenNumber = askNumber()
    while (givenNumber!=nombreADeviner){
        if (givenNumber>nombreADeviner){
            console.log("Plus petit")
            alert("Faux réessaie")
            givenNumber=askNumber()
        } else {
            console.log("Plus grand")
            alert("Faux réessaie")
            givenNumber=askNumber()
        }
       
    }
    alert("Bravo tu as trouvé le bon nombre !")
    console.log("bravo") 

}

function gamePlay(){
    const nombreADeviner = askNumber()
    console.log("nombre à deviner :" + nombreADeviner)
    
    //console.log("givenNumber:" + givenNumber)
    didIWin(nombreADeviner)



}