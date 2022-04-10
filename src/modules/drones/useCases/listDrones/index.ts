import { DronesRepository } from "../../repositories/implementations/DronesRepository";
import { ListDronesController } from "./ListDronesController";
import { ListDronesUseCase } from "./ListDronesUseCase";

const dronesRepository = DronesRepository.getInstance();
const listDronesUseCase = new ListDronesUseCase(dronesRepository);
const listDronesController = new ListDronesController(listDronesUseCase);

export { listDronesController };
