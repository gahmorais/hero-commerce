// require("dotenv/config");
const app = require("./server");
// const clientRoute = require("./routes/clientRoute");
// const propertyRoute = require("./routes/propertyRoute");
// const realtorRoute = require("./routes/realtorRoute");

// app.use(clientRoute);
// app.use(propertyRoute);
// app.use(realtorRoute);

app.get("/", (req, res) => {
  res.json({ message: "Api imobiliaria" });
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`API online from ${process.env.PORT || 3000}`);
});
