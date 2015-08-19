function guardarUsuario() {
	// var nombre = document.getElementById('inname').value;
	// var apellido = document.getElementById('inapellido').value;
	// var telefono = document.getElementById('intel').value;
	// if (nombre != "" && apellido != "" && telefono != "") {
	if (document.getElementById('inname').value != "" && document.getElementById('inapellido').value != "" && document.getElementById('intel').value != "") {
		// window.sessionStorage.setItem(sessionStorage.length+1,nombre + " " + apellido+": Teléfono "+telefono);
		window.sessionStorage.setItem(sessionStorage.length+1,document.getElementById('inname').value + " "
		+ document.getElementById('inapellido').value+": Teléfono "+document.getElementById('intel').value);
		alert("Se ha guardado el usuario... :)");
	};
}

function cagarUsuario() {
	// var result = "";
	// for (i in sessionStorage) {
	// 		result += sessionStorage[i]+"\n";
	// 	};
	// if(sessionStorage.length>0)	{
	// 	alert(result);
	// }	
}