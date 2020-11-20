
//Uso de operaciones asíncronas, aquí modeladas con la función setTimeout.
//Note el valor de i asociado a las ejecuciones de las temporizaciones.


for(var i=0; i<10; i++) setTimeout(function(){console.log(i)},i*1000);


console.log("Terminado codigo script  valor actual de i: ",i);

//Tendremos 10 console.log que se ejecutarán desde i = 0 hasta 10 * 1000 cada uno,
//por lo qu tendremos cada 1000*i unidades de tiempo un console.log; estoa van a 
//imprimir la variable i=10 ya que cuiando se realicen las funciones asíncronas ese
//es el valor que tendrá la i, ya que al ser var el scope de esta tambien estara fuera
//del for
