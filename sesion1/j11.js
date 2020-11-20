//Uso de operaciones asíncronas, aquí modeladas con la función setTimeout.
//Note los valores de índice e i en la ejecución.


for(var i=0; i<10; i++) tempo(i);
  

console.log("Terminado codigo script","   valor actual de i: ",i);


function tempo(índice){
	setTimeout(function(){console.log("índice:  ",índice,"  i:  ",i);},índice*1000);
}

//Se imprimiran 10 console.log cada uno con su indice correspondiente
//la variable indice al ser pasada como parametro al cada callback sera distinta, pero 
//la variable i al ser declarada como avr, cuando los callbacks vayan a aceder a ella
//esta ya tendra un valor de 10