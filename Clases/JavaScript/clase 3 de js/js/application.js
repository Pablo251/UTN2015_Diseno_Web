var MYAPP = MYAPP || {
	UTILS: {
		id: 1,
		sum: function(a,b){
 			return a+b;
		},
		subs: function(a,b){
 			return a-b;
		},
	},
	year: 2015,
	month: 'feb',
	Client: function (firstName, lastName) {
	  this.firstName = firstName;
	  this.lastName = lastName;

	  this.save = function() {
	  	//insert into 
	  	console.log('Saving client', this.firstName, this.lastName);
	  	// save to localstorage
	  };
	},
	validateUser: function() {
		var year = 2020;

		var username = document.getElementById('username').value;
		var password = document.getElementById('password').value;

		var errorElement = document.getElementById('error_msg');

		if (username == 'admin' && password == 'password') {
			console.log('logged in')
			errorElement.setAttribute("style","display:none;");
		} else {
			errorElement.innerHTML = 'Username or Password invalid';
			errorElement.setAttribute("style","display:block;");
		}	
	},
	saveClient: function() {
		var firstName = document.getElementById('firstName').value;
		var lastName = document.getElementById('lastName').value;

		var client1 = new MYAPP.Client(firstName, lastName);
		client1.save();
	},
};


var x = 20;