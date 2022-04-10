import { DronesRepository } from "../../repositories/implementations/DronesRepository";
import { UpdateDroneController } from "./UpdateDroneController";
import { UpdateDroneUseCase } from "./UpdateDroneUseCase";

const dronesRepository = DronesRepository.getInstance();

const updateDroneUseCase = new UpdateDroneUseCase(dronesRepository);

const updateDroneController = new UpdateDroneController(updateDroneUseCase);

export { updateDroneController };
