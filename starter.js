const scooterApp = require('./src/ScooterApp.js');

var session = new scooterApp();

session.register('jonnyp','password',24);
session.register('jonnyb','somepass',31);
session.register('jonnyp','pass2', 23);

// console.log(session.usersArray);

session.login('jonnyb','somepass');