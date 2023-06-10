function isMajeur(age) {
    /*
        Tu dois écrire cette fonction pour qu'elle retourne :
        "Majeur" s'il a plus de 18 ans
        "Bravo tu est Majeur" si il à 18 ans
        "Mineur" s'il est mineur
    */
    if (age > 18) {
        return "Majeur";
    }
    else if (age === 18) {
        return "Bravo tu est Majeur";
    }
    else {
        return "Mineur";
    }
}


const resultMajeur = isMajeur(30);
const result18Years = isMajeur(18);
const resultMineur = isMajeur(15);

console.log("resultMajeur: " + resultMajeur);
console.log("result18Years: " + result18Years);
console.log("resultMineur: " + resultMineur);

const goodMajeur = resultMajeur === "Majeur";
const good18Years = result18Years === "Bravo tu est Majeur";
const goodMineur = resultMineur === "Mineur";

if (goodMajeur && good18Years && goodMineur) {
    console.log("===============");
    console.log("Tu as réussi l'exercice félicitations !");
    console.log("===============");
}
