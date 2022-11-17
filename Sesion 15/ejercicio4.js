let numero = +prompt("Ingrese un número mayor a 500") 

if (numero>=500) {
    var descuento = numero*0.18
    document.write('Número Ingresado '+ numero + '<br>'+ 'El 12% es: ' + descuento )
} else {
    document.write('Intenta ingresando nuevamente')
}