function guardarUsuario() {
	if (nombre != "" && apellido != "" && telefono != "") {
		window.sessionStorage.setItem(sessionStorage.length+1,document.getElementById('inname').value + " "
		+ document.getElementById('inapellido').value+": Teléfono "+document.getElementById('intel').value);
		alert("Se ha guardado el usuario... :)");
	};
}

function cagarUsuario() {
	var result = "";
	for (i in sessionStorage) {
			result += sessionStorage[i]+"\n";
		};
	if(sessionStorage.length>0) {
		alert(result);	
	}
}