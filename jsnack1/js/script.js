let bottone = document.getElementById("calcola")
let nome = document.getElementById("nome")
let risultato = document.getElementById("risultato")

bottone.addEventListener("click", function(){

    risultato.classList.remove("d-none")
    let validName = ["invitato0", "invitato1", "invitato2", "invitato3", "invitato4"];
    let nomeValido = false;

    for(let i = 0; i < validName.length; i++){
        if(validName[i] === nome.value){
            nomeValido = true;
        }
    }
    if(nomeValido){
        risultato.innerHTML = "Puoi entrare";
    } else {
        risultato.innerHTML = "Accesso negato.";
    }
})