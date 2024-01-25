// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let bello = prompt("¿Eres bellisimx?");
if ( bello == "si"){
    alert("Ciertamente")
}

else if ( bello == "no"){
    alert("No te creo")
}

else {
    alert("por favor responde si o no")
}