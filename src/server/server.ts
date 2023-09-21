import express from "express";
import ViteExpress from "vite-express";
import { loadApiEndpoints } from "./Controllers/api.ts";
import cors from "cors"

const app = express();
app.use(cors({ origin: "*" }))

loadApiEndpoints(app)

ViteExpress.listen(app, 3000, () => console.log("Server is listening at http://localhost:3000"));
