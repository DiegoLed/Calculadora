// Previo necesitamos identificar los botones, tener las rutas de acceso a cada elemento
// y al display que va a mostrar el resultado.-
//  (1) primero recolectar los datos que clickea el usuario.
//  (2) la operacion que quiere realizar el usuario.
//  (3) operamos realizamos la funcion que necesita el usuario.

//1+3

/*
const tecla = document.querySelectorAll(".inner")
const numero1 = parseInt(tecla[21].textContent)
const numero3 = parseInt(tecla[23].textContent)
const operacion = tecla[24].textContent

const display = tecla[0]

console.log(display.textContent)


const resultado = (op, num1, num3) => {
    if (op === "+"){
        return num1 + num3;
    } 
}

console.log(resultado(operacion, numero1,numero3))
*/

// display.textContent = resultado(operacion, numero1, numero3)


// if(valor === "="){
//     display.textContent = resultado(operacion, numero1, numero3)
// }







// 116 + 32

// 1- un array que me permita almacenar las numero, 
// usar las posiciones para concatenar, 
// transformar en numerico
// pasar los numeros a las funciones

// podemos hacer una funcion que tome los valores.


 
// function clicked(valor){      NO Funciono
//     console.log(valor);
//     let datosIngresado = [];
//     let cont = 0;
//     while (valor !== "="){
//         datosIngresado.push(valor);
//         cont += 1;
//         console.log(datosIngresado[cont] + "Dato ingresado");
//     }
//     console.log(datosIngresado + "array con todos los datos ingresados");
// }


var datosIngresados = [];
var operadores = ["%","1/x","**","√","÷","×","-","+","+/-"];
var botonesEspeciales = ["(",")","M-","MS","CE","C","del",".","="];
var numero1 = [];
var numero2 = [];
var esOperador = false;
var operacion = "";

function clicked(valor){
    let datoIngresado = valor;
    datosIngresados.push(datoIngresado);

    for(const datoIngresado of datosIngresados) {

        console.log(datosIngresados + " -> array ingresados");

        if(datoIngresado === "="){
            datosIngresados.pop();
            const operancion = datosIngresados;
            console.log(operancion);
        }  

    }
}




