const { Router } = require("express");
const ClientController = require("../controllers/ClientController");

const router = Router();

router.post("/clientes/novocliente", async (req, res) => {
  const client = req.body;
  const newClient = await ClientController.createClient(client)
  res.json(newClient)
});

router.get("/clientes", async (req, res) => {
  const clients = await ClientController.getClients();
  res.json(clients);
});

module.exports = router;
