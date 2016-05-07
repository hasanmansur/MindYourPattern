var fs = require("fs");
var data = fs.readFileSync("./txt/singleton.txt");
console.log(data.toString());
console.log("-------------------------------------------------OUTPUT------------------------------------------------");

function Singleton () {
    var instance;
    function init () {
        var privateMsg = "welcome";
        var privateRandomNumber = Math.random();
        var privateGetMsg = function () {
            return privateMsg;
        }
        var privateGetRandomNumber = function () {
            return privateRandomNumber;
        }
        return {
            getMsg: privateGetMsg,
            getRandomNumber: privateGetRandomNumber
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
}

var mySingleton = Singleton();
var singletonObjectA = mySingleton.getInstance();
var singletonObjectB = mySingleton.getInstance();
console.log("------------------Object A-------------------");
console.log(singletonObjectA.getMsg());
console.log(singletonObjectA.getRandomNumber());
console.log("------------------Object B-------------------");
console.log(singletonObjectB.getMsg());
console.log(singletonObjectB.getRandomNumber());
