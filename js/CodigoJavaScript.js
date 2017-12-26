function showDiv() {
    document.getElementById("login").style.visibility = "hidden";
   document.getElementById("logined").style.visibility = "visible";
}

function hideDiv() {
   document.getElementById("logined").style.visibility = "hidden";
   document.getElementById("login").style.visibility = "visible";
}

function AgregarSeccion(i)
{
    if(i <= 8){
        var input = document.createElement("input");
        var br = document.createElement("br");
        input.type = "text";

        input.setAttribute("id", "input" + i);
        input.setAttribute("id", "input" + i);
        input.style.margin = "2px";
        br.setAttribute("id", "br" + i);

        seccionesAmodificar.insertBefore(input, Agregar);
        seccionesAmodificar.insertBefore(br, Agregar);
        alert(i);
    }
    else{
        alert("No se pueden agregar m\u00E1s secciones");
    }
}
function EliminarSeccion(i)
{
    alert(i);
    var aquitar = document.getElementById("input" + i);
    var aquitarbr = document.getElementById("br" + i);

    seccionesAmodificar.removeChild(aquitar);
    seccionesAmodificar.removeChild(aquitarbr);
}