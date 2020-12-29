const JsonModel = require('./JsonModel');
const Car = require('./Car');
const Motorcycle = require('./Motorcycle');

class Main{
    constructor(filename) {
        this.content = new JsonModel(filename).readFile();
        this.vehicles = []
        this.getAll();
    }

    //Cargamos todos los vehiculos al array Vehicles de la clase Main
    getAll() {
        this.content.forEach(element => {
            if (element.hasOwnProperty("doors")) {
                this.vehicles = [
                    ...this.vehicles,
                    new Car(
                        element.brand,
                        element.model,
                        element.doors,
                        element.price
                    )
                ]
            } else {
                this.vehicles = [
                    ...this.vehicles,
                    new Motorcycle(
                        element.brand,
                        element.model,
                        element.cylinder,
                        element.price
                    )
                ]
            }
        })
    };

    //Mostramos todos los vehiculos
    showAll() {
        this.vehicles.forEach(element => console.log(element.details()));
    };

    //Obtenemos el vehiculo mas caro
    getMostExpensive() {
        let maxPrice = Math.max.apply(
            Math,
            this.vehicles.map(function (e) {
                return e.price;
              })
        )

        let vehicle = this.vehicles.find(element => element.price == maxPrice);

        return `Vehículo más caro: ${vehicle.brand} ${vehicle.model}`;
    };

    //Obtenemos el vehiculo mas barato
    getMostCheap() {
        let maxPrice = Math.min.apply(
            Math,
            this.vehicles.map(function (e) {
                return e.price;
              })
        )

        let vehicle = this.vehicles.find(element => element.price == maxPrice);

        return `Vehículo más barato: ${vehicle.brand} ${vehicle.model}`;
    };

    //Obtenemos un vehiculo que contenga "Y"
    containsY() {
        let vehicle = this.vehicles.find(e => e.model.includes("y") || e.model.includes("Y"));
    
        return `Vehículo que contiene en el modelo la letra 'Y': ${vehicle.brand} ${vehicle.model} $${vehicle.price}`;
      }

    //Obtenemos el array ordenado por precio de mayor a menor.
    orderByPrice() {
        let orderedArray = this.vehicles.sort((a, b) => a.price > b.price ? -1 : 1);
    
        console.log("Vehículos ordenados por precio de mayor a menor:");
        orderedArray.forEach(e => console.log(`${e.brand} ${e.model}`));
      }

}

module.exports = Main;