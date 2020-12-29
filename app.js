const App = require("./classes/Main");

const appVehicles = new App("vehicles");

console.log();
appVehicles.showAll();
console.log("=============================");
console.log(appVehicles.getMostExpensive());
console.log(appVehicles.getMostCheap());
console.log(appVehicles.containsY());
console.log("=============================");
appVehicles.orderByPrice();