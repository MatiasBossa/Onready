const Vehicle = require('./Vehicle');

class Car extends Vehicle{
    constructor(brand, model, doors, price) {
        super(brand, model, price);
        this.doors = doors;
    }

    details() {
        return `Marca: ${this.brand} // Modelo: ${this.model} // Puertas ${this.doors} // Precio ${this.price}`
    }
}

module.exports = Car;