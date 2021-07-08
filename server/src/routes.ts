import express from "express";

import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

/** Items */
routes.get("/items", itemsController.index);

/** Points */

routes.get("/points", pointsController.index);

routes.get("/points/:id", pointsController.show);

/** Create Point */
routes.post("/points", upload.single("image"), pointsController.create);

export default routes;
