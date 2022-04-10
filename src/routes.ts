import { Router } from "express";

import { createDroneController } from "./modules/drones/useCases/createDrone";
import { deleteDroneController } from "./modules/drones/useCases/deleteDrone";
import { listDronesController } from "./modules/drones/useCases/listDrones";
import { listDroneController } from "./modules/drones/useCases/listOneDrone";
import { updateDroneController } from "./modules/drones/useCases/updateDrone";

const router = Router();

router.post("/drones/:id", (request, response) => {
  return createDroneController.handle(request, response);
});

router.get("/drones", (request, response) => {
  listDronesController.handle(request, response);
});

router.get("/drones/:id", (request, response) => {
  listDroneController.handle(request, response);
});

router.put("/drones/:id", (request, response) => {
  updateDroneController.handle(request, response);
});

router.delete("/drones/:id", (request, response) => {
  deleteDroneController.handle(request, response);
});

export { router };
