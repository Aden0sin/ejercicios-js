// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let divisible = prompt("Dame un numero");
{
    if (divisible % 2 === 0) {
        alert(divisible + "numero es divisible entre 2")
    }

    else{
        alert(divisible + "numero no es divisble entre 2")
    }
} 