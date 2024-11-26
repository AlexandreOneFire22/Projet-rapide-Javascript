

//Récuperer le formulaire

const formulaire = document.querySelector("#formulaire")

// Récupérer le bouton

const convertirBtn = document.querySelector("#convertir-btn")

let Resultat

convertirBtn.addEventListener("click",() => {
    //Récupérer les valeurs saisie dans le formulaire

    const valeur = formulaire.valeur.value.trim(); //Trim = enlève les espaces à gauche et à droite ##################################################
    const uniteDepart = formulaire.uniteDepart.value;
    const uniteArriver = formulaire.uniteArriver.value;

    //Vérifier le formulaire
    if (!formulaire.checkValidity()){
        //Ajouter dynamiquement la classe "was-validated" de bootstrap
        formulaire.classList.add("was-validated")
        return
    }

    //Afficher le résultat :

    switch (uniteDepart){

        case (uniteArriver) :
            Resultat = valeur;
            break


        case "m" :
            if (uniteArriver === "km") {

                Resultat = valeur / 1000;
            }
            break
        case "km" :
            if (uniteArriver === "m") {

                Resultat = valeur * 1000;
            }
            break


        case "g" :
            if (uniteArriver === "kg") {
                Resultat = valeur / 1000;
            }
            break
        case "kg" :
            if (uniteArriver === "g") {
                Resultat = valeur * 1000;
            }
            break


        case "c" :
            if (uniteArriver === "f") {
                Resultat = (valeur * 1.8 ) + 32;
            }
            break
        case "f" :
            if (uniteArriver === "c") {
                Resultat = (valeur - 32) / 1.8;
            }
            break
    }

    if (Resultat === undefined){
        Resultat = "Conversion non prise en charges"
    }

    formulaire.classList.remove("was-validated")
    document.querySelector("#resultat").textContent = Resultat
    Resultat = undefined

})















