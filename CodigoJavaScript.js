function showDiv() {
	document.getElementById('login').style.display = "none";
   document.getElementById('logined').style.display = "block";
}

function hideDiv() {
   document.getElementById('logined').style.display = "none";
   document.getElementById('login').style.display = "block";
}

var i = 1;

function AgregarSeccion()
{
	if(i <= 4){
		var input = document.createElement("input");
		var br = document.createElement("br");
		input.type = "text";

	 	input.setAttribute("id", "input" + i);
	 	input.setAttribute("id", "input" + i);
	 	input.style.margin = "2px";
	 	br.setAttribute("id", "br" + i);

		seccionesAmodificar.insertBefore(input, Agregar);
		seccionesAmodificar.insertBefore(br, Agregar);
		i++;
	}
	else{
		alert("No se pueden agregar más secciones");
	}
}
	

function EliminarSeccion()
{
	i--;

	var aquitar = document.getElementById("input" + i);
	var aquitarbr = document.getElementById("br" + i);

	seccionesAmodificar.removeChild(aquitar);
	seccionesAmodificar.removeChild(aquitarbr);
}

function openWin()
{
	myWindow=window.open('Video.html','width=720','height=450','scrollbars=no','resizable=no');
	myWindow.focus();
}