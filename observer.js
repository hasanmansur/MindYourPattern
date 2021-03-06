var fs = require("fs");
var data = fs.readFileSync("./txt/observer.txt");
console.log(data.toString());
console.log("-------------------------------------------------OUTPUT------------------------------------------------");

var subject = function () {
	var observers = [];
	return {
		subscribeObserver: function (observer) {
			observers.push(observer);
		},
		unsubscribeObserver: function (observer) {
			var index = observers.indexOf(observer);
		  	if(index > -1) {
		    	observers.splice(index, 1);
		  	}
		},
		notifyObservers: function () {
			for (var i = 0; i < observers.length; i++) {
				observers[i].notify(i);
			}	
		},
		print: function () {
			console.log(observers);
		}
	}
}

var observer = function () {
	return {
		notify: function (index) {
			console.log("Observer " + index + " is notified!");
		}
	}
}

var subject = subject();
var observer1 = observer();
var observer2 = observer();
var observer3 = observer();
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
console.log("--------- before observer removal --------------");
subject.notifyObservers();
subject.unsubscribeObserver(observer1);
console.log("---------- after observer removal --------------");
subject.notifyObservers();
