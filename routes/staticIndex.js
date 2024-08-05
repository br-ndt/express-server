import fs from "fs";
import path from "path";
import url from "url";

const staticIndexResponse = (req, res, next) => {
  const __filepath = url.fileURLToPath(import.meta.url);
  const staticIndex = path.join(__filepath, "../..", "static", "index.html");
  fs.readFile(staticIndex, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.sendFile(staticIndex);
    }
  });
};

export default staticIndexResponse;
