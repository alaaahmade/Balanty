import express, { Express, json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import {} from "dotenv/config";

import { router } from "./routes/router";

const PORT = process.env;

const app: Express = express();

app.set("PORT", 3030 || PORT);

app.use([
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
]);

app.use("/api/v1", router);

export default app;
