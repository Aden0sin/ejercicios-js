/* 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
*/

/*
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

else{    
    console.log("Error!");
    alert("Error, por favor intenta de nuevo")
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
else{    
    console.log("Error!");
    alert("Error, por favor intenta de nuevo")
    return;
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
    alert("Error, por favor intenta de nuevo")
    return;
}

let total = helado + kitkat + brownie;
console.log( usuario + " el total de su orden es de " + total);
alert( usuario + " el total de su orden es de " + total);

}

ordenDeHelado()

Probando otro metodo, dejando esto de comentario de momento
*/



let inventario = [{ name: "helado", precio: 50, disponible: "si" },
                 { name: "kitkat", precio: 15, disponible: "no" },
                 { name: "brownie", precio: 20, disponible: "si"},
]

function disponibilidad(producto){ 
    let productoEncontrado = inventario.find((element) => element.name === producto);

    if (productoEncontrado) {
        return true
       
    }
    else{
        alert("error")
        return false
        
    
    } 

}

function obtenerPrecio(prod){
    let productoPrecio = inventario.find((element) => element.name === prod);
    if(productoPrecio){
        return productoPrecio.precio;}
    else{
    alert("error, precio no encontrado!");
    }
}

function ordenarHelado2(){
    alert("Bienvenido a Eskimo!");
    let usuario = prompt("Brindanos tu nombre por favor");
    let helado = prompt("Deseas un helado? Responde Si o No"); 
    helado = helado.toLowerCase().trim()
    disponibilidad(helado);
    let precioHelado = obtenerPrecio(helado);
    
    let kitkat = prompt("Deseas añadir topping de kitkat? Responde Si o No"); 
    kitkat = kitkat.toLowerCase().trim()
    disponibilidad(kitkat);
    let precioKitkat = obtenerPrecio(kitkat);

    let brownie = prompt("Deseas añadir topping de brownie? Responde Si o No"); 
    brownie = brownie.toLowerCase().trim()
    disponibilidad(brownie);
    let precioBrownie = obtenerPrecio(brownie);

    let total = precioHelado + precioKitkat + precioBrownie;
    alert(usuario + ", el total de su orden es " + total)

    }

    ordenarHelado2();



