import express from "express";
import path from "path";

import staticIndexResponse from "../routes/staticIndex.js";
import errorMiddleware from "../middlewares/error.js";

const createExpressApp = (serverFileName) => {
  const server__dirname = path.dirname(serverFileName);

  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(server__dirname, "static")));

  app.get("/", staticIndexResponse);

  app.use(errorMiddleware);

  return app;
};

export default createExpressApp;
