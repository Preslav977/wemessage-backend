const { check } = require("express-validator");

const imageSizeExceedLimit = "Image size exceed 5 MB";

const formatImageSize = require("../middleware/formatImageSize");

const cloudinary = require("cloudinary").v2;

const validateImage = [
  check("file").custom(async (value, { req }) => {
    const uploadedImageSize = req.file.size;

    console.log(uploadedImageSize);

    if (uploadedImageSize > 5000000) {
      const deleteUploadedImage = await cloudinary.uploader.destroy(
        `wemessage_images/${req.file.originalname}`
      );

      console.log(deleteUploadedImage);

      throw new Error(`${imageSizeExceedLimit}`);
    }
  }),
];

module.exports = validateImage;