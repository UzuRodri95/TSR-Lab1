//Uso de operaciones asíncronas, aquí modeladas con la función setTimeout.
//Note los valores de indice e i en la ejecución.


for(var i=0; i<10; i++) 
  setTimeout(function(índice){return function(){
		           console.log("índice:  ",índice,"  i:  ",i)}
		      }(i),i*1000);


console.log("Terminado codigo script","   valor actual de i: ",i);

//Se imprimiran 10 console.log de la siguiente manera:
//					indice:0 i:10
//					indice:1 i:10
//					  ...
//					indice:9 i:10
//Terminado codigo script valor actual de i: 10
//la variable i al ser var tendrá ese valor al salir del bucle y cuando sea llamada por los callbacks
//la vabiable indice se se mostrara bien puesto que esta es pasada como parametro
//al callback