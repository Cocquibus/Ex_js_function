function exo1() {
    let x = Math.abs(prompt("nbr1"))
    let y = Math.abs(prompt("nbr2"))
    let z = Math.abs(prompt("nbr3"))

    function retourne(x, y, z) {
        console.log(z, y, x)
    }
    retourne(x, y, z)
}
function exo2(){
    let x = prompt("nombre")
    function dpar(x){
        if((x % 2) == 0){
            console.log("divisiblepar2")
        }
        else{
            console.log("nondivisible");
        }
    }
    dpar(x)
}
function exo3(){
    let mdp = prompt("mdp est: rien")

    function verif(x){
        if(mdp == "rien"){
            console.log("bien joué");
        }
        else{
            console.log("raté");
        }
    }
    verif(mdp)
}
function exo4(){
    function ajout(x){
        coding.push(x)
        console.table(coding)
    }
    function retirer(x){
        for(i=0;i<coding.length;i++){
            if(coding[i] == x){
                coding.splice(i,1)
                console.table(coding);
            }   
        }
    }
    let coding = [];
    let x = 1;
    while(x == 1){
        let choix = prompt("choix 1: ajout 2: retirer 3:sortir")
        if(choix == "1"){
            let ajouter = prompt("ajout au tab")
            ajout(ajouter)
        }
        else if(choix == "2"){
            let retirage = prompt("ajout au tab")
            retirer(retirage) 
        }
        else{
            x = 0;
        }
    }
}
function exo5(x,y){
    function calcul(x,y){
        console.log("addition " + (x + y))
        console.log("soustraction " + (x - y))
        console.log("multiplication " + (x * y))
        console.log("division " + (x / y))
        console.log("modulo " + (x % y))
        console.log("carré de nbr1 " + Math.sqrt(x))
        console.log("carré de nb2 " + Math.sqrt(y))
        console.log("racine " + x**y)
        //suffit de mettre return sur chaque comme ceci: return x "choix" y

    }
    let nbr1 = Math.abs(prompt("nombre1"))
    let nbr2 = Math.abs(prompt("nombre2"))
    calcul(nbr1,nbr2)
}
function exo6(){
    function modif(x){
       x = x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
        console.log(x);
        return x
    }
    let choix = prompt("choix du mot")
    modif(choix)
}