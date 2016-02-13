// this function does this.
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;

	//changing className
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

var sayMyName = function (name) {
	alert('My name is: '+name);
}
var whatAmI = function (string) {
	alert('A '+string)
}
var carOnNow = function (string) {
	alert('Car '+string)
}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
	'seat 1',
	'seat 2',
	'seat 3', 
	'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert("fly");
	},
	switchCar: function (isOn) {
		console.log('turn car '+isOn)					;
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}	
	}
};

		console.log('hello there friends!');