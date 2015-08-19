// Guarda el usuario en el localStorage
function guardarUsuario() {
	if (document.getElementById('inname').value != "" && document.getElementById('inapellido').value != "" && document.getElementById('intel').value != "") {
		window.localStorage.setItem(localStorage.length+1,document.getElementById('inname').value + " "+ document.getElementById('inapellido').value+": Teléfono "+document.getElementById('intel').value);
		alert("Se ha guardado el usuario... :)");
		document.getElementById('inname').value = "";
		document.getElementById('inapellido').value = "";
		document.getElementById('intel').value = "";
	};
}
// Carga los elementos almacenados en el localStorage y concatena cada uno en una variable para luego ser mostrada.
function cagarUsuario() {
	var result = "";
	for (i in localStorage)
			result += localStorage[i]+"\n";
	if(localStorage.length>0)
		alert(result);	
}
//Elimina los elementos alojados en el localStorage
function limpiarLocalStorage () {
	localStorage.clear();
}