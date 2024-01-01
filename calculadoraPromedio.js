let nombre, nota1, nota2, nota3, bandera, promedio;
bandera = false;
do{
    if (bandera) {
        alert("Ingrese su nombre por favor");
    }
    nombre=prompt("Ingrese su nombre completo");
    bandera = true;
} while (nombre == '' || !isNaN(nombre))

let men1 = "primer";

nota1 = validaNumero(men1);

let men2 = "segundo";


nota2 = validaNumero(men2);
let men3 = "tercer";

nota3 = validaNumero(men3);

promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if(promedio >= 7){
    alert(nombre+", ¡felicidades! Has aprobado con un promedio de "+promedio)
} else{
    alert(nombre+", gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es "+promedio)
}

function validaNumero(mensaje) {
    let nota;
    let bandera = false;
    do {
        if (bandera) {
            alert("Ingrese un número entre 0 y 10")
        }

        nota = parseInt(prompt("Ingrese nota del " + mensaje + " trimestre"));
        bandera = true;
    } while (nota < 0 || nota > 10 || isNaN(nota))

    return nota;
}