import { v2 as cloud } from "cloudinary";
import fs from "fs";

cloud.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export const uploadFileToCloud = async (filePath) => {
  return new Promise((resolve, reject) => {
    cloud.uploader
      .upload_stream(
        { width: 300, height: 300, gravity: "face", crop: "fill" },
        (err, res) => {
          if (err) return reject(err.message);
          resolve(res.secure_url);
        }
      )
      .end(fs.readFileSync(filePath));
  });
};
