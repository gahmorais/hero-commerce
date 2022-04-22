const { Router } = require("express");

const router = Router();

router.get("/imoveis", (req, res) => {
  res.json({ message: "Rota de imóveis" });
});

module.exports = router