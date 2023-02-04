import express from "express";
import appConfig from "./02 - utils/AppConfig";
import cors from "cors";
import dataController from "./06 - controllers/dataController";
import routeNotFound from "./03 - middleware/routeNotFound";
import catchAll from "./03 - middleware/catchAll";
import expressFileUpload from "express-fileupload";

const server = express();
server.use(express.json());
server.use(expressFileUpload())

server.use(cors({ origin: "http://localhost:3000" }));

server.use("/api", dataController);

server.use("*", routeNotFound);

server.use(catchAll);

server.listen(appConfig.port, () => {
  console.log(`Listening to http://localhost:${appConfig.port}`);
});
