const app = require("./server");
const { readFileSync } = require("fs");
const clientRoute = require("./routes/clientRoute");
const propertyRoute = require("./routes/propertyRoute");
const realtorRoute = require("./routes/realtorRoute");
const ImageService = require("./service/ImageService");
const { resolve, join } = require("path");
app.use(clientRoute);
app.use(propertyRoute);
app.use(realtorRoute);

const imageService = new ImageService();
const rootFolder = resolve();
const image = join(rootFolder, "src", "assets", "foto.jpeg");
(async () => {
  const imageBuffer = readFileSync(image).toString("hex");
  let result = [];
  for (let i = 0; i < imageBuffer.length; i += 2) {
    result.push(`0x${imageBuffer[i]}${imageBuffer[i + 1]}`);
  }
  console.log(result);
  // console.log(await imageService.upload(result));
})();
app.get("/", (req, res) => {
  res.json({ message: "Api imobiliaria" });
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`API online from ${process.env.PORT || 3000}`);
});
