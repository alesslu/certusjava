let hombres= +prompt("Ingrese Total de Hombres") 
let mujeres= +prompt("Ingrese Total de Mujeres") 

var general = hombres + mujeres
var total_mujeres = (mujeres*100)/general
var total_hombres = (hombres*100)/general

alert (
    'Recaudado de Entradas: '+ 
    '\nTotal de Alumnos: ' + general +
    '\nPorcentaje de Mujeres: ' + total_mujeres + '%' +
    '\nPorcentaje de Hombres: ' + total_hombres + '%' 
)