//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

function Calificador()
{
    let calificacion = prompt("Dame un numero entre el 1 al 10 y te dire la calificacion");
    
    calificacion = Number(calificacion);


 

    function Identificador(calificacion)
    {

    if(calificacion > 10 || calificacion < 1 )
    {
    console.log("Error!");
    alert("Error!");
    }
    else
    {}
    }

    Identificador(calificacion);

    if(calificacion < 6 && calificacion >= 1){
        console.log("Reprobado!");
        alert("Reprobado");
    }

    else if( calificacion >= 6 && calificacion <= 8){
        console.log("Regular");
        alert("Regular")
    }

    else if( calificacion == 9){
        console.log("Bien!");
        alert("Bien!")
    }

    else if( calificacion == 10){
        console.log("Excelente");
        alert("Excelente")
    }

    }

    Calificador()

