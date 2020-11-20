
//Decalaración de variables. Uso de funciones y clausuras.

//Variables

var x;
var w, ww;
var u = Infinity;

//Funciones

function f(y,z){
	x = function(){ console.log("función x:      ",y,"     ",z,"    ",u);};
	w = function(u){ 
		  console.log("función w:      ",y,"     ",z,"   ",u);
		  ww = function(){ console.log("función ww:     ",y,"     ",z,"   ",u); return y+z+u;};
		};
	console.log(`argumentos de f: ${y}  ---  ${z}`);
}

//Ejecución del código

f(0,100); //x, w, ww toman los valores function que se les asigna.
x(); //y=0, z=100, u=Infinity
w(-1000); //y=0, z=100, u=-1000; 

console.log("ww(): " + ww()); //ww=-900 -> u no coge el valor Infinity porque w le ha clausurado el valor -1000 previamente a la u

//¿Cuál es el resultado de la ejecución de la sentencia
console.log("u= ",u);  //Infinity
//?
