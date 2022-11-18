let temperatura = +prompt("Ingrese temperatura en Farenheit") 

let conversion = function () {
    return (temperatura-32)*0.55
}

document.write(
    temperatura +' °F' + ' convertido a °C es: ' +   conversion(temperatura)
)
