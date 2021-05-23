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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/**
 * API routes.
 */
app.use("/api/trips", trips);

export default app;
