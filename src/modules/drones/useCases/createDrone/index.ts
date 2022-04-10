import { DronesRepository } from "../../repositories/implementations/DronesRepository";
import { CreateDroneController } from "./CreateDroneController";
import { CreateDroneUseCase } from "./CreateDroneUseCase";

const dronesRepository = DronesRepository.getInstance();

const createDroneUseCase = new CreateDroneUseCase(dronesRepository);

const createDroneController = new CreateDroneController(createDroneUseCase);

export { createDroneController };
