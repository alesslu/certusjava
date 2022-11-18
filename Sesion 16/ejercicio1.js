let numero1 = +prompt("Ingrese un número") 
let numero2 = +prompt("Ingrese el siguiente número")

let restar = function (){
    return numero1-numero2;
    
}

document.write(numero1+ '-' + numero2 + '=' + restar(numero1,numero2))