var fs = require("fs");
var data = fs.readFileSync("./txt/prototype.txt");
console.log(data.toString());
console.log("-------------------------------------------------OUTPUT------------------------------------------------");

console.log(":::::::::::::::: Inheritance ::::::::::::::");

var car = {
	model: "ford",
	drive: function () {
		console.log("get set go!!!");
	},
	stop: function () {
		console.log("crazy driving!");
	}
}

var mycar = Object.create(car);
console.log(mycar.model);
mycar.drive();
mycar.stop();

console.log("::::::::: Differential Inheritance :::::::::");

var Car = {
	model: "audi",
	drive: function () {
		console.log("lets go!!!");
	},
	stop: function () {
		console.log("amazing driving!");
	},
	welcome: function () {
		console.log("hey " + this.owner);
	}
}

var myCar = Object.create(Car, {
	"owner": { value: "hasan"}
});
console.log(myCar.model);
myCar.drive();
myCar.stop();
console.log(myCar.owner);
myCar.welcome();
