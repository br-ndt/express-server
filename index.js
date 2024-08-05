import url from "url";
import dotenv from "dotenv";

import createExpressApp from "./boot/express.js";

dotenv.config();
const __filename = url.fileURLToPath(import.meta.url);

const HOST = "0.0.0.0";
const PORT = process.env.NODE_ENV === "development" ? 5000 : 5173;

const express = createExpressApp(__filename);

express.listen(PORT, HOST, (error) => {
  if (error) console.error(error);
  console.log(`server started at ${HOST}:${PORT}`);
});
