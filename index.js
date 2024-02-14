let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]];

function suma(a, b) {
    return a + b;
}


function potenciacion(a, b) {
    let resultado = 1;
    for (let i = 0; i < b; i++) {
        resultado *= a;
    }
    return resultado;
}


function separarPalabras(string) {
    let array = string.split(" ");
    return array;
}


function repetirString(string, num) {
    return string.repeat(num);
}


function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


function ordenarArray(arrayNum) {
    return arrayNum.sort();
}


function obtenerPares(array) {
    let arrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i]);
        };
    };
    return arrayPares;
}


function pintarArray(arr) {
    return "[" + arr.join(", ") + "]";
}


function arrayMapi(arrayX, funcionX) {
    let result = [];
    for (let i = 0; i < arrayX.length; i++) {
        result.push(funcionX(arrayX[i]));
    }
    return result;
}


function eliminarDuplicados(array) {
    let nuevoArray = [];
    for (i = 0; i < array.length; i++) {

        if (!nuevoArray.includes(array[i])) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}


let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

function multiplicacion(a, b) {
    return a * b;
}


function division(a, b) {
    return a / b;
}


function esPar(a) {
    if (a % 2 == 0) {
        return true;
    } else if (!a % 2 == 0) {
        return false;
    }
}



function obtenerImpares(array) {
    let impares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            impares.push(array[i])
        }
    }
    return impares
}


function resta(a, b) {
    return a - b;
}
let arrayFunciones = [suma, resta, multiplicacion];



function sumarArray(array) {
    let res = 0
    for (let i = 0; i < array.length; i++) {
        res += array[i]
    }
    return res
}



function ordenarArray2(array) {
    array.sort((a, b) => {
        return b - a;
    });
    return array;
};



function multiplicarArray(array) {
    let res = 1;
    for (let i = 0; i < array.length; i++) {
        res *= array[i];
    }
    return res;
};








