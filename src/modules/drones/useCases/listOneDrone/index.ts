import { DronesRepository } from "../../repositories/implementations/DronesRepository";
import { ListDroneController } from "./ListDroneController";
import { ListDroneUseCase } from "./ListDroneUseCase";

const dronesRepository = DronesRepository.getInstance();

const listDroneUseCase = new ListDroneUseCase(dronesRepository);

const listDroneController = new ListDroneController(listDroneUseCase);

export { listDroneController };
