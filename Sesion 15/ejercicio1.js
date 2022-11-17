let precio = +prompt("Ingrese el Total de la Compra") 


if (precio>=150) {
    var total=precio-(precio*0.12)
    document.write('Felicidades!' + '<br>'+ '\nTiene un descuento de 12%' + '<br>'+'\nEl total a pagar es: ' + total)
} else {
    document.write('No se aplico Descuento, el monto a pagar es: ' + precio)
}
