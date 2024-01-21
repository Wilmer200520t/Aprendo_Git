const fecha = new Date('12-31-2023');
const numeroSemana = getWeekNumber(fecha);

function getWeekNumber(date) {
    // Clonar la fecha proporcionada para no modificar la original
    const clonedDate = new Date(date.getTime());
    
    // Establecer la fecha al 4 de enero, que es el inicio de la semana ISO
    clonedDate.setMonth(0, 4);
  
    // Calcular la diferencia en milisegundos entre la fecha proporcionada y el 4 de enero
    const diferenciaMilisegundos = date - clonedDate;
  
    // Calcular el número de semanas redondeando hacia abajo
    const numeroSemanas = Math.floor(diferenciaMilisegundos / (7 * 24 * 60 * 60 * 1000));
  
    return numeroSemanas + 1; // Sumar 1 porque queremos el número de la semana actual
  }

console.log(numeroSemana);