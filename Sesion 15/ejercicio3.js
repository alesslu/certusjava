let trabajador = prompt("Ingrese nombre del trabajador") 
let sueldo = +prompt("Ingrese su sueldo") 
let hijos = +prompt("¿Cuántos hijos tiene?") 

if (hijos>=1) {
    var bono = sueldo*0.07
    var sueldofinal = sueldo + bono
    document.write('¡Felicidades '+ trabajador + ' !' + '<br>'+ 'Al tener hijos, usted obtiene un bono' + '<br>'+'Bono: ' + bono + '<br>'+'Sueldo Final: ' + sueldofinal)
} else {
    document.write('Hola ' + trabajador +'<br>' + 'Sueldo ' + sueldo)
}