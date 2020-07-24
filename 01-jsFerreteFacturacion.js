/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var vPrecioA;
    var vPrecioB;
    var vPrecioC;
    var vResult;

    vPrecioA= parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecioB= parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecioC= parseInt(document.getElementById("txtIdPrecioTres").value);
    
    vResult = vPrecioA+vPrecioB+vPrecioC;

    alert("Resultado= " + vResult);

}
function Promedio () 
{
    var vPrecioA;
    var vPrecioB;
    var vPrecioC;
    var vResult;

    vPrecioA= parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecioB= parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecioC= parseInt(document.getElementById("txtIdPrecioTres").value);
    
    vResult = (vPrecioA+vPrecioB+vPrecioC)/3;

    alert("Resultado= " + vResult);

}
function PrecioFinal () 
{
    var vPrecioA;
    var vPrecioB;
    var vPrecioC;
    var vResult;

    vPrecioA= parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecioB= parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecioC= parseInt(document.getElementById("txtIdPrecioTres").value);
    
    vResult = (vPrecioA+vPrecioB+vPrecioC)*1.21;

    alert("Resultado= " + vResult);

}