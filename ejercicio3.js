let general= +prompt("Total de Entradas Generales") 
let mayores= +prompt("Total de Entradas para Mayores de 65") 
let menores= +prompt("Total de Entradas para Menores de edad") 

var total_general = general*150
var total_mayores = mayores*50
var total_menores = menores*80

alert (
    'Recaudado de Entradas: '+ 
    '\nGenerales: ' + total_general +
    '\nMayores de 65: ' + 'S/. ' + total_mayores  +
    '\nMenores de edad: '+ 'S/. ' + total_menores 
)