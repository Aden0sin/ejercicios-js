//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.


function MensajeDelDia(){
    alert("Dime que día de la semana es y te dire algo")
    let dia = prompt("Que día es hoy?")

    dia = dia.toLowerCase().trim()
    if(dia == "lunes"){
        console.log("Primer día de la semana, tu puedes!")
        alert("Primer día de la semana, tu puedes!")
    }
    else if(dia == "martes"){
        console.log("El día mas dificil")
        alert("El día mas dificil")
    }
    else if(dia == "miercoles"){
        console.log("Feliz joroba de la semana!")
        alert("Feliz joroba de la semana!")
    }
    else if(dia == "jueves"){
        console.log("Feliz Jueves!")
        alert("Feliz Jueves!")
    }
    else if(dia ==="viernes"){
        console.log("A descansar!")
        alert("A descansar!")
    }
    else if(dia == "sabado"){
        console.log("Vamos a la playa")
        alert("Vamos a la playa")
    }
    else if(dia == "domingo"){
        console.log("O no, mañana es lunes :o")
        alert("O no, mañana es lunes :o")
    }
    else{
        console.log("Dame un día de la semana")
        alert("Dame un día de la semana")
    }
}

MensajeDelDia()