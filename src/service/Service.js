const database = require("../models");

class Service {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllData() {
    return await database[this.modelName].findAll();
  }
}

module.exports = Service