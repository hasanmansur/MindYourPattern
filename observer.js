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
subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.print();
subject.notifyObservers();
subject.unsubscribeObserver(observer1);
subject.print();
subject.notifyObservers();

