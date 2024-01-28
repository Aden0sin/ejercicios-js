//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
function ejercicio-5(a,b){
    let a = prompt("Dame un numero");
    let b = prompt("Dame otro numero");
    if(a < b){
    alert( a + " es menor que " + b )
    }
    else if(b < a){
        alert(b + " es menor que " + b)
    }
    else{
        alert("Por favor introducir dos numeros distintos")
    }
}

ejercicio-5()