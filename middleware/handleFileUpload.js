const cloudinary = require("cloudinary").v2;

async function handleFileUpload(file) {
  const response = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    allowed_formats: ["jpeg", "png", "gif"],
    folder: "wemessage_images",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  });

  return response;
}

module.exports = handleFileUpload;
