var fs = require("fs");
var data = fs.readFileSync("./txt/constructor.txt");
console.log(data.toString());
console.log("-------------------------------------------------OUTPUT------------------------------------------------");
console.log("::::::::::::::: Basic Constructor Pattern :::::::::::::::::::");

function car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    this.toString = function () {
        return this.model + "-" + this.year + " has done " + this.miles + " miles";
    };
}
 
var civic = new car("Honda Civic", 2009, 20000);
var bluebird = new car("Nissan Bluebird", 2010, 5000);

console.log(civic.toString());
console.log(bluebird.toString());

console.log(":::::::::::::::: Constructors With Prototypes ::::::::::::::::");

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return this.model + "-" + this.year + " has done " + this.miles + " miles";
};
 
var civic = new Car("Honda Civic", 2009, 20000);
var bluebird = new Car("Nissan Bluebird", 2010, 5000);

console.log(civic.toString());
console.log(bluebird.toString());
