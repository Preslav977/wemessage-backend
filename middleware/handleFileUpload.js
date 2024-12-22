const cloudinary = require("cloudinary").v2;

async function handleFileUpload(file) {
  const response = await cloudinary.uploader.upload(file, {
    resource_type: "image",
    folder: "wemessage_images",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  });

  console.log(response);

  return response;
}

module.exports = handleFileUpload;
