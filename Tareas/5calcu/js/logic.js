var MYAPP = MYAPP || {
	numeroActual: 0,
	tipo: 'n',
	array: "",
	suma: function () {
		MYAPP.residuo();
/*		MYAPP.numeroActual += parseInt($("#input").val());
		$("#result").val(MYAPP.numeroActual);	
		$("#input").val(" ");*/
		MYAPP.tipo = '+';
	},
	resta: function () {
		/*debugger;	*/	
		MYAPP.residuo();		
/*		MYAPP.numeroActual -= parseInt($("#input").val());
		$("#result").val(MYAPP.numeroActual);	
		$("#input").val(" ");	*/	
		MYAPP.tipo = '-';
	},
	multi: function () {
		MYAPP.residuo();
/*		MYAPP.numeroActual *= parseInt($("#input").val());
		$("#result").val(MYAPP.numeroActual);	
		$("#input").val(" ");*/		
		MYAPP.tipo = '*';
	},
	divi: function () {
		MYAPP.residuo();
/*		MYAPP.numeroActual /= parseInt($("#input").val());
		$("#result").val(MYAPP.numeroActual);	
		$("#input").val(" ");*/	
		MYAPP.tipo = '/';	
	},	
	igual: function (){
		MYAPP.residuo();
		MYAPP.tipo = '=';
	},
	residuo: function (){
		switch(MYAPP.tipo){
			case '+':
			MYAPP.numeroActual += parseInt($("#input").val());
			$("#result").val(MYAPP.numeroActual);	
			$("#input").val("0");
			break;
			case '-':
			MYAPP.numeroActual -= parseInt($("#input").val());
			$("#result").val(MYAPP.numeroActual);	
			$("#input").val("0");
			break;
			case '*':
			MYAPP.numeroActual *= parseInt($("#input").val());
			$("#result").val(MYAPP.numeroActual);	
			$("#input").val("0");
			break;
			case '/':
			MYAPP.numeroActual /= parseInt($("#input").val());
			$("#result").val(MYAPP.numeroActual);	
			$("#input").val("0");
			break;
			case 'n':
			MYAPP.numeroActual = parseInt($("#input").val());
			$("#result").val(MYAPP.numeroActual);	
			$("#input").val("0");				
			break;
			case '=':
			$("#input").val("0");
			break;
		}
	},
	buttonPres: function(){
				debugger;		
		var array = $("#input").val();
		array += $(this).val();
		$("#input").val(array);
		numeroActual = parseInt(array);	
	},
	clean: function (){
		MYAPP.numeroActual = 0;
		$("#input").val(" ");
		$("#result").val(" ");
	},
};