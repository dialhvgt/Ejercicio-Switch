//EJERCICIO 2 Costo de Entrada en un Parque de Diversiones
function calcularCostoEntrada(edad) {
    let costo;
    switch (true) {
        case (edad < 12):
            costo = 10;
            break;
        case (edad > 60):
            costo = 15;
            break;
        case (edad >= 12 && edad <= 60):
            costo = 20;
            break;
        default:
            costo = 0;
            break;
    }

    console.log("El costo de la entrada es: $" + costo);
}

//EJERCICIO 3 Cálculo de Costo de Envío de un Paquete
function calcularCostoEnvio(destino, peso) {
    let costoPorKilo;
    switch (destino) {
        case 'dentro':
            costoPorKilo = 10;
            break;
        case 'fuera':
            costoPorKilo = 20;
            break;
        default:
            costoPorKilo = 0;
            break;
    }

    let costoEnvio = costoPorKilo * peso;
    console.log("El costo de envío es: $" + costoEnvio);
}

//EJERCICIO 4 Determinar la Cantidad de Días en un Mes
function obtenerDiasDelMes(mes) {
    let dias;
    switch (mes.toLowerCase()) {
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            dias = 31;
            break;
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            dias = 30;
            break;
        case 'febrero':
            dias = 28; // No considera años bisiestos
            break;
        default:
            dias = 0; // Mes no válido
            break;
    }

    console.log("El mes de " + mes + " tiene " + dias + " días.");
}

//EJERCICIO 5 Determinar si un Día es Laborable o de Fin de Semana
function determinarDiaSemana(dia) {
    switch (dia.toLowerCase()) {
        case 'lunes':
        case 'martes':
        case 'miércoles':
        case 'jueves':
        case 'viernes':
            console.log(dia + " es un día laborable.");
            break;
        case 'sábado':
        case 'domingo':
            console.log(dia + " es un fin de semana.");
            break;
        default:
            console.log("Día inválido.");
            break;
    }
}


//EJERCICIO 6 Determinar si una Letra es Vocal o Consonante
function determinarLetra(letra) {
    switch (letra.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log(letra + " es una vocal.");
            break;
        default:
            console.log(letra + " es una consonante.");
            break;
    }
}














































