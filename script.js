"use strict"



let telefonInput = document.getElementById("mobil");
document.writeln()
if (telefonInput !== null){
    telefonInput.addEventListener("input", event =>{
        let telefonNummer = telefonInput.value;
        if (telefonNummer != 8){
            telefonInput.setAttribute("style", "border-color: red")
        }else{
            telefonInput.setAttribute("style", "border-color: green")
        }
    })
}


let fornavnInput = document.getElementsByName("fornavn")
    fornavnInput.addEventListener("input", event =>{
        let fornavn = fornavnInput.value;
        if (fornavn < 2 ){
            fornavnInput.setAttribute("style", "border-color: red")
        }else{
            fornavnInput.setAttribute("style", "border-color: green")
        }
})

    let etternavnInput = document.querySelector("div.pure-control-group input[name='etternavn")
        etternavnInput.addEventListener("input", event =>{
            let etternavn = etternavnInput.value;
            if (etternavn.length < 2 ){
                fornavnInput.setAttribute("style", "border-color: red")
            }else{
                fornavnInput.setAttribute("style", "border-color: green")
            }
        })




