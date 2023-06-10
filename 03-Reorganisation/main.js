/*
    Tu dois écrire le code des fonctions reorderAsc et reorderDesc. Un petit texte au-dessus des fonctions t'explique ce
    qu'elles doivent faire. Ne modifie pas le code HTML et tout le code qui suit la fonction vérification. Il te suffit
    de coder les deux fonctions citées plus haut, ensuite ouvre le fichier index.html avec ton navigateur, tu pourras
    voir si tu as réussie les fonctions ou non !
 */

/*
    Cette fonction prend en paramètre un tableau d'int désordonné. Vous devez retourner un tableau contenant tous les
    chiffres de celui passer en paramètre, mais cette fois si tous les chiffres doivent être dans l'ordre descendant
    (le plus gros nombre en 1er et le plus petit nombre en dernier).
     */
function reorderDesc(disorganizeArray) {

}

/*
    Cette fonction prend en paramètre le tableau d'int que vous avez réorganisé dans l'ordre descendant. Vous devez
    retourner ce tableau avec cette fois-ci les valeurs dans l'ordre ascendant. (du plus petit au plus grand).
    Forcément, vous devez avoir réussi l'exercice précédent pour commencer celui-ci !
    - Astuce : Vous avez juste à inverser les valeurs du tableau !
     */
function reorderAsc(arrayDesc) {

}

//Ne touche pas au code qui suit, il permet de vérifier si tu as réussi ou non l'exercice !
function verification() {
    /*
    Ne modifiez pas le code ci-dessous, une fois vos fonctions codées exécutées le programme, la console vous diras
    si vous avez réussie le test ou non !
    */
    let disorganizeArray = [5, 1, 14, 16, 7, 3, 21, 19, 32, 29];
    let userArrayDesc = reorderDesc(disorganizeArray);
    let userArrayAsc = reorderAsc(userArrayDesc);
    console.log("userArrayAsc: ", userArrayAsc);
    console.log("userArrayDesc: ", userArrayDesc);

    //Test exercidce Nombre Chiffre d'affaire supperieur a 1200
    const successAsc = document.querySelector("#ascSuccess");
    const ErrorAsc = document.querySelector("#ascError");
    const successDesc = document.querySelector("#descSuccess");
    const ErrorDesc = document.querySelector("#descError");


    if (testSuccessDesc(userArrayDesc)) {
        console.log("Bravos, tu as reussi l'exercice dans le sens descendant !");
        successDesc.hidden = false;
        ErrorDesc.hidden = true;
    }
    else {
        console.log("Mince, tu as une erreur sur le sens descendant, reessayes !");
        successDesc.hidden = true;
        ErrorDesc.hidden = false;
    }

    if (testSuccessAsc(userArrayAsc)) {
        console.log("Bravos, tu as reussi l'exercice dans le sens ascendant !");
        successAsc.hidden = false;
        ErrorAsc.hidden = true;
    }
    else {
        console.log("Mince, tu as une erreur sur le sens ascendant, reessayes !");
        successAsc.hidden = true;
        ErrorAsc.hidden = false;
    }

}
verification();

function testSuccessDesc(resultTab) {
    let GoodResult = [32, 29, 21, 19, 16, 14, 7, 5, 3, 1];
    return arrayEquals(resultTab, GoodResult);
}

function testSuccessAsc(resultTab) {
    let GoodResult = [1, 3, 5, 7, 14, 16, 19, 21, 29, 32];
    return arrayEquals(resultTab, GoodResult);
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
