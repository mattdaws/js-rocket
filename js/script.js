function doCoolStuff(argument) {
	// body...
	var currentClassName = document.getElementById('cool').className;

	if (currentClassName == 'cool') {
		currentClassName = document.getElementById('cool').className = 'cool red';
	} else{
		currentClassName = document.getElementById('cool').className = 'cool';
	}
}

function sayMyName(name) {
	// body...
	alert('My name is: ' + name)
}

var car = {
	make: "VW",
	type: "Polo",
	colour: "Blue",
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: ["seat 1", "seat 2", "seat 3", "seat 4"],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function(){
		alert('fly');
	},
	switchCar: function(isOn){
		console.log('turn car ' + isOn)
		if (isOn == true) {
			this.isTurnedOn = true;
		} else{
			this.isTurnedOn = false;
		}
	}
};

console.log("hello there friends!");