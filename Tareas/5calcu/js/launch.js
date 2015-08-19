$(document).ready(function () {
	$("#sum").click(MYAPP.suma);
	$("#res").click(MYAPP.resta);
	$("#mul").click(MYAPP.multi);
	$("#div").click(MYAPP.divi);
	$("#igu").click(MYAPP.igual);
	$("#clean").click(MYAPP.clean);
	$("input[name = num]").click(MYAPP.buttonPres);
});