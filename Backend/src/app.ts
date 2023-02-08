import express from "express";
import appConfig from "./02 - utils/AppConfig";
import cors from "cors";
import dataController from "./06 - controllers/dataController";
import routeNotFound from "./03 - middleware/routeNotFound";
import catchAll from "./03 - middleware/catchAll";
import expressFileUpload from "express-fileupload";
import authController from "./06 - controllers/authController";

const server = express();

// Midlleware for image routes
server.use("/images", express.static("src/01 - assets/images"));

server.use(express.json());
server.use(expressFileUpload());

server.use(cors({ origin: "http://localhost:3000" }));

server.use("/api", dataController);
server.use("/api", authController);

server.use("*", routeNotFound);

server.use(catchAll);

server.listen(appConfig.port, () => {
  console.log(`Listening to http://localhost:${appConfig.port}`);
});
