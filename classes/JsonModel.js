const fs = require('fs');
const path = require('path');

class JsonModel {
    constructor(filename) {
        this.filename = filename;
    }

    readFile() {
        return JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/../data/${this.filename}.json`), 'utf-8'));
    }
}

module.exports = JsonModel;