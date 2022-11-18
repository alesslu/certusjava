let numero1 = +prompt("Ingrese un número") 
let numero2 = +prompt("Ingrese el siguiente número")

let sumar = function (){
    return numero1+numero2
}

document.write(numero1+ '+' + numero2 + '=' + sumar(numero1,numero2))