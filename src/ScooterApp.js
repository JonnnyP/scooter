const User = require('./User.js');
const Scooter = require('./Scooter.js');

class ScooterApp {
	constructor() {
		this.currentSessions = [];
		this.allScooters = [];
		this.usersArray = [];
		this.usersLoggedIn = [];
	}

	// static getSessions() {
	// 	return this.currentSessions.length;
	// }

	register(username,pass,age) {
		let usernameTaken = false;
		let temp;

		for(var i =0; i<this.usersArray.length; i++) {
			if(username === this.usersArray[i].username) usernameTaken = true;
		}

		if(!usernameTaken) {
			let newUser = new User(username,pass, age);
			this.usersArray.push(newUser);
			console.log(`User ${username} was added`);
		} else console.log(`${username} is already taken, try again`);
	}

	login(username,pass) {
		let isCorrect = false;

		for(var i =0; i<this.usersArray.length; i++) {
			if(username === this.usersArray[i].username && pass === this.usersArray[i].password) {
				this.usersLoggedIn.push(this.usersArray[i]);
				isCorrect = true;
			}
		}

		if(!isCorrect) console.log("No account found with those credentials");
		else console.log("Successfully logged in");
	}

	addScooter(location,scooter) {
		if(location[0] != "" && location[1] != "" && scooter) {
			this.allScooters.push(scooter);
			console.log("Added scooter");
		} else console.log("Invalid input");
	}

	removeScooter(scooterId) {
		for(var i =0; i<this.allScooters.length; i++) {
			if(this.allScooters[i].id === scooterId) 
		}
	}
}

module.exports = ScooterApp;