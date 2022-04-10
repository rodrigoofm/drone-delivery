import { Drones } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IDronesRepository } from "../../repositories/IDronesRepository";

class ListDroneUseCase {
  constructor(private dronesRepository: IDronesRepository) {}

  async execute(id: string): Promise<Drones> {
    const drone = await this.dronesRepository.findById(id);

    if (!drone) {
      throw new AppError("Drone not found!");
    }

    return drone;
  }
}

export { ListDroneUseCase };
