import fs from "fs";
import path from "path";
import url from "url";

const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  const __filepath = url.fileURLToPath(import.meta.url);
  const errorIndex = path.join(__filepath, "../..", "static", "error.html");
  fs.readFile(errorIndex, (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).send("Sorry, something went wrong.");
    } else {
      res.sendFile(errorIndex);
    }
  });
};

export default errorMiddleware;
