const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class ImageService {
  async upload(image) {
    const dados = await cloudinary.v2.uploader.upload(image, {
      folder: "imoveis",
    });
    return dados.secure_url;
  }
}

module.exports = ImageService;
