var fs = require("fs");
var data = fs.readFileSync("./txt/module.txt");
console.log(data.toString());
console.log("-------------------------------------------------OUTPUT------------------------------------------------");

var basketModule = (function () {
    // private members
    var basket = [];
    
    function addItem (item) {
        if (typeof item === "object") {
            basket.push(item);
        }
        else {
            console.log("item could'nt be added");
        }
    }
    
    function getItemCount () {
        console.log("Total items: " + basket.length);
    }
    
    function totalPrice () {
        var price = 0;
        var i = 0;
        while (i < basket.length) {
            price += basket[i].price;
            i++;
        }
        console.log("Total Price: " + price);
    }
    
    // public API
    return {
        add: addItem,
        totalPrice: totalPrice,
        itemCount: getItemCount 
    } 
})();

basketModule.add({name: "mango", price: 100});
basketModule.add({name: "grape", price: 200});
basketModule.itemCount();
basketModule.totalPrice();

