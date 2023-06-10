/*
    Tu dois écrire le code des fonctions countNbVentesReussites et countNbChiffreAffaireSupperieurSmic. Un petit texte au-dessus
    des fonctions t'explique ce qu'elles doivent faire. Ne modifie pas le code HTML et la fonction vérification. Il te suffit
    de coder les deux fonctions citées plus haut, ensuite ouvre le fichier index.html avec ton navigateur, tu pourras voir si
    tu as réussie les fonctions ou non !
 */

/*
    Cette fonction prend en paramètre un tableau de boolean, ce tableau correspond à toutes les ventes faites, quand
    la valeur est à false la vente n'a pas été accomplie, quand il est à true la vente à réussie. Vous devez retourner
    le nombre de ventes réussites.
     */
function countNbVentesReussites(tableauxVentesBool) {

}

/*
    Cette fonction prend en paramètre un tableau d'int, ce tableau contient tous les chiffres d'affaires de chaque mois
    sur 15 mois. Vous devez retourner le nombre de mois ou le chiffre d'affaires a été supérieur à 1200$.
     */
function countNbChiffreAffaireSupperieurSmic(tableauxChiffresAffaires) {

}


//Ne touche pas au code qui suit, il permet de vérifier si tu as réussi ou non l'exercice !
function verification() {
    /*
    Ne modifiez pas le code ci-dessous, une fois vos fonctions codées exécutées le programme, la console vous diras
    si vous avez réussie le test ou non !
    */
    let ventesReussites = [true, false, false, false, true, false, true, true, true, true, true, false, true, true];
    let chiffreAffaireParMois = [954, 1207, 1675, 1184, 2205, 994, 1352, 2099, 650, 842, 1200, 1198, 754, 854, 3298];

    //Test exercidce Nombre Ventes Reussites
    const successNbVente = document.querySelector("#nbVenteSuccess");
    const ErrorNbVente = document.querySelector("#nbVenteError");
    const resultCountNbVenteSuccess = countNbVentesReussites(ventesReussites);
    console.log("resultCountNbVenteSuccess: ", resultCountNbVenteSuccess);
    if (resultCountNbVenteSuccess === 9) {
        successNbVente.hidden = false;
        ErrorNbVente.hidden = true;
        console.log("Tu as reussi l'exercice sur le nombre de ventes reussites !");
    }
    else {
        successNbVente.hidden = true;
        ErrorNbVente.hidden = false;
        console.log("Ho ho erreur, tu n'as pas réussie l'exercice du nombre de ventes réussites, réessaye !");
    }

    //Test exercidce Nombre Chiffre d'affaire supperieur a 1200
    const successNbChiffreAffaire = document.querySelector("#nbChiffreAffaireSuccess");
    const ErrorNbChiffreAffaire = document.querySelector("#nbChiffreAffaireError");
    const resultCountNbChiffreAffaire = countNbChiffreAffaireSupperieurSmic(chiffreAffaireParMois);
    console.log("resultCountNbChiffreAffaire: ", resultCountNbChiffreAffaire);
    if(resultCountNbChiffreAffaire === 7) {
        successNbChiffreAffaire.hidden = false;
        ErrorNbChiffreAffaire.hidden = true;
        console.log("Tu as reussi l'exercice sur le nombre de chiffre d'affaire superieur a 1200 !");
    }
    else {
        successNbChiffreAffaire.hidden = true;
        ErrorNbChiffreAffaire.hidden = false;
        console.log("Ho ho erreur, tu n'as pas réussie l'exercice du nombre de chiffre d'affaire superieur a 1200 !, réessaye !");
    }
}
verification();
