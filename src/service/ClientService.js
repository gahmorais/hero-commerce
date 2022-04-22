const Service = require("./Service");
const database = require("../models");
class ClientService extends Service {
  constructor() {
    super("Client");
  }

  async createClient(client) {
    return await database[this.modelName].create(client);
  }
}

module.exports = ClientService;
