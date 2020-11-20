//Uso de operaciones asíncronas, aquí modeladas con la función setTimeout.
//Note el valor de i asociado a las ejecuciones de las temporizaciones.
//Uso de la sentencia let.

for(let i=0; i<10; i++) 
  setTimeout(function(x){return function(){console.log(x)}}(i),i*1000);

//¿Cuál es el resultado de la ejecución de la sentencia
//console.log("i= ",i);
//?

console.log("Terminado codigo script");


//Imprimira 10 console.log con su respecto indice, y la variable i
//fuera del bucle al no estar declarada tendremos un error en ejecucion.