/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
*/

function ordenDeHelado(){
alert("Bienvenido a Eskimo!")
let usuario = prompt("Brindanos tu nombre por favor");
let helado = prompt("Deseas un helado? Responde Si o No"); 
helado = helado.toLowerCase().trim()
if(helado == "si"){
    helado = 50
}
else if(helado == "no"){
    
    console.log("Vuelve pronto!");
    alert("Vuelve pronto!");

    return;
}

let kitkat = prompt("Deseas añadir topping de kitkat? Responde Si o No")
kitkat = kitkat.toLowerCase().trim();

if(kitkat == "si"){
    kitkat  = 15
}
else if(kitkat  == "no"){
    
    kitkat = 0
    console.log( usuario + " no desea kitkat");
}


let brownie = prompt("Deseas añadir toping de brownie? Responde Si o No");
brownie = brownie.toLowerCase().trim();

if(brownie == "si"){
    brownie  = 20
}
else if(brownie  == "no"){
    
    brownie = 0
    console.log( usuario + " no desea brownie");
}

else{    
    console.log("Error!");
    alert("Error!")
}

let total = helado + kitkat + brownie;
console.log( usuario + " el total de su orden es de " + total);
alert( usuario + " el total de su orden es de " + total);

}

ordenDeHelado()