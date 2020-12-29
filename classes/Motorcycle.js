const Vehicle = require('./Vehicle');

class Motorcycle extends Vehicle{
    constructor(brand, model, cylinder, price) {
        super(brand, model, price);
        this.cylinder = cylinder;
    }

    details() {
        return `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada ${this.cylinder} // Precio ${this.price}`
    }
}

module.exports = Motorcycle;