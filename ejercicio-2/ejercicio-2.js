// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let divisible = prompt("Dame un numero");
{
    if (divisible % 2 === 0) {
        alert(divisible + " es un numero divisble entre 2")
    }

    else{
        alert(divisible + " no es un numero divisble entre 2")
    }
} 