let alumno = prompt("Ingrese nombre del alumno") 
let parcial = +prompt("Ingrese la nota de su parcial") 
let final = +prompt("Ingrese la nota de su examen final") 
let practicas = +prompt("Ingrese el promedio de prácticas") 

var promedio = (parcial+(2*final)+practicas)/4

if (promedio>=11) {
    document.write('¡Felicidades '+ alumno + ' !' + '<br>'+ 'Estas aprobado' + '<br>'+'Promedio final: ' + promedio)
} else {
    document.write('No alcanzaste al minimo de la nota aprobatoria, consulta con tu tutor ')
}
