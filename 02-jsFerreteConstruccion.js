/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var vLargo;
    var vAncho;
    var vResult;

    vLargo= parseInt(document.getElementById("txtIdLargo").value);
    vAncho= parseInt(document.getElementById("txtIdAncho").value);
    
    vResult = vLargo*vAncho*3;

    alert("Debera comprar= " + vResult + " " + "metros de alambre.");

}
function Circulo () 
{
    var vRadio;
    var vResult;

    vRadio= parseInt(document.getElementById("txtIdRadio").value);
    
    vResult = 2*3.14*vRadio;

    alert("Debera comprar= " + vResult.toFixed(2) + "metros de alambre");	
}
function Materiales () 
{
    var vLargo;
    var vAncho;
    var vResult;
    var vCal;
    var vCemento;

    vLargo= parseInt(document.getElementById("txtIdLargo").value);
    vAncho= parseInt(document.getElementById("txtIdAncho").value);
    
    vResult = vLargo*vAncho;
    vCal = vResult*3;
    vCemento = vResult*2;

    alert("Debera comprar= " + vCemento + " " + "bolsas de cemento y " + vCal +" " + "bolsas de cal.");	
}