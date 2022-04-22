const ClientService = require("../service/ClientService");
const clientService = new ClientService();

class ClientController {
  async getClients() {
    return await clientService.getAllData();
  }

  async createClient(client) {
    return await clientService.createClient(client);
  }
}

module.exports = new ClientController();
