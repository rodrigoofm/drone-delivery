import { Drones } from "@prisma/client";

import { IDronesRepository } from "../../repositories/IDronesRepository";

class ListDronesUseCase {
  constructor(private dronesRepository: IDronesRepository) {}

  async execute(): Promise<Drones[]> {
    const drones = await this.dronesRepository.list();

    return drones;
  }
}

export { ListDronesUseCase };
