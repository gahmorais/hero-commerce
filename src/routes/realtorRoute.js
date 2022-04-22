const { Router } = require("express");

const router = Router();

router.get("/corretores", (req, res) => {
  res.json({ message: "Rota de corretores" });
});

module.exports = router