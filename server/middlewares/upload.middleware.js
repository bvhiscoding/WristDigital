const multer = require("multer");
const ApiError = require("../utils/ApiError");

const storage = multer.memoryStorage();

const imageFileFilter = (req, file, cb) => {
  if (file.mimetype && file.mimetype.startsWith("image/")) {
    return cb(null, true);
  }
  return cb(new ApiError(400, "Only image files are allowed"));
};

const upload = multer({
  storage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 5 * 1024 * 1024, files: 10 }, // max 5MB/file, tối đa 10 file
});


module.exports = upload