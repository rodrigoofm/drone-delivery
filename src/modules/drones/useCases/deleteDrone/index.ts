import { DronesRepository } from "../../repositories/implementations/DronesRepository";
import { DeleteDroneController } from "./DeleteDroneController";
import { DeleteDroneUseCase } from "./DeleteDroneUseCase";

const dronesRepository = DronesRepository.getInstance();

const deleteDroneUseCase = new DeleteDroneUseCase(dronesRepository);

const deleteDroneController = new DeleteDroneController(deleteDroneUseCase);

export { deleteDroneController };
