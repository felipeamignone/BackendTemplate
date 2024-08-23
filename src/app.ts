import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../swagger_output.json";

import apiRouter from "./routes";
import { dispatchQuery } from "./db";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/", apiRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
  console.log(`Access api documentation in: http://localhost:${PORT}/api-docs`);
});
