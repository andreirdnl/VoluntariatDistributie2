import { Router } from "express";
import bodyParser from "body-parser";
import path from "path";
import { tripsData } from "../helpers";

// Create Express server
const router = Router();

router.get("/", (req, res) => {
  return res.json(tripsData);
});

export const trips = router;
