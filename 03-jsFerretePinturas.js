/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var vGrados;
    var vConvert;

    vGrados= parseInt(document.getElementById("txtIdTemperatura").value);
    vConvert = (vGrados-32)/1.8;

    alert(vGrados + "º " + "Fahrenheit son " + vConvert.toFixed(2) + "º centigrados.");
}

function CentigradosFahrenheit () 
{
    var vGrados;
    var vConvert;

    vGrados= parseInt(document.getElementById("txtIdTemperatura").value);
    vConvert = (vGrados*1.8)+32;

    alert(vGrados + "º " + "Centigrados son " + vConvert.toFixed(2) + "º Fahrenheit.");	
}



