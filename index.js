let arrayVacio= [];
let arrayNumeros= [0,1,2,3,4,5,6,7,8,9];
let arrayNumerosPares=[0,2,4,6,8];
let arrayBidimensional= [[0,1,2],["a","b","c"]];

function suma (a,b){
   return a+b;
}

function potenciacion(a,b) {
    let resultado=1;
    for(let i=0;i<b;i++) {
        resultado*=a;
    }
    return resultado;
}

function separarPalabras (string) {
    let array= string.split(" ");
    return array;
}


function repetirString(string,num) {
    return string.repeat(num);
     }

function esPrimo (numero) {
    if (numero<=1) {
        return false;
    }
    for (let i=2;i*i<=numero;i++) {
        if (numero%i===0) {
            return false;
        }
    }
    return true;
}

function ordenarArray (arrayNum) {
      return arrayNum.sort();
}


function obtenerPares (arrayNumber) {
    for(let i=0;i<arrayNumber.length;i++){
        if (arrayNumber%2==0) {
        }
    }
    return arrayNumber;
}

function pintarArray(arr){
    return `[${arr.toString()}]`
  }
  

function arrayMapi (arrayX,funcionX) {
    for (let i=0;i<arrayX.length;i++) {
        arrayX[i] = funcionX(arrayX[i])
    }
    return arrayX;
}

function eliminarDuplicados(array) {
     let duplicado=[];
     for (let i=0;i<array.length;i++) {
        if (duplicado.indexOf(array[i])=== -1) 
        duplicados.push(array[i]);
     }
    return duplicado;
}


let arrayNumerosNeg= [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
let holaMundo= ["Hola","Mundo"];
let loGuardoTodo=["hola","que",23,42.33 ,"tal"];
let arrayDeArrays=[[756,"nombre"],[225,"apellido"],[298,"direccion"]];

function multiplicacion(a,b) {
    return a*b;
}

function division (a,b) {
    return a/b;
}

function esPar(a) {
     if(a%2==0) {
        return true;
     } else if (!a%2==0){
        return false;
     }
}

/*let arrayFunciones=[[a,b],[c,d],[e,f]];
  return [[a+b],[c-d],[e*f]] ;*/

  function obtenerImpares (arrNum) {
       let arrImpar=0;
       for (let i=0;i<arrNum.length;i++) {
        if(i%2!==0) {
            return arrImpar;
        }
       }
  }




