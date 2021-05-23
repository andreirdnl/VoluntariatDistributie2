import express from "express";
import bodyParser from "body-parser";
import path from "path";

import { trips } from "./routes";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));
/**
 * API routes.
 */
app.use("/api/trips", trips);

export default app;
