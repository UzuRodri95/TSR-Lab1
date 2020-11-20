
//Uso de operaciones asíncronas, aquí modeladas con la función setTimeout.
//Note el valor de índice asociado a las ejecuciones de las temporizaciones.


for(var i=0; i<10; i++) 
  setTimeout(function(índice){
	  return function(){console.log("índice: ",índice)}}(i),i*1000);


console.log("Terminado codigo script  valor actual de i: ",i);

//Se imprimira 10 console.log cada uno con la i correspondiente puesto que aunque
//este declarada como var cuando cuando hacemos el callback mas interno, le pasamos
//el valor en ese momento de i. EL valor de la i fuera del bloque sera de 10 ya que 
//esta declarada como var

