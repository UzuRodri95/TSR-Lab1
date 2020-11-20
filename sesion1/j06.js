//Uso de operaciones asíncronas, aquí modeladas con la función setTimeout.
//Note el valor de i asociado a las ejecuciones de las temporizaciones.
//Uso de la sentencia let.

let i = 0;

do {
	setTimeout(function(){console.log(i)},i*1000);
	i++;  
} while (i<10);

console.log("Terminado codigo script  valor actual de i: ",i);

//Se imprimira 10 console.log en los que aparecera el valor de i = 10 ya que al realizar los callbacks
//la variable i estará fuera del bucle y valdra 10.