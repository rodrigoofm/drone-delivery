import { Drones } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IDronesRepository } from "../../repositories/IDronesRepository";

interface IRequest {
  id?: string;
  customer_name: string;
  customer_image: string;
  customer_address: string;
  battery: number;
  max_speed: number;
  average_speed: number;
  status: string;
  current_fly: number;
}

class UpdateDroneUseCase {
  constructor(private dronesRepository: IDronesRepository) {}

  async execute(
    id: string,
    {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly,
    }: IRequest
  ): Promise<Drones> {
    const verifyId = await this.dronesRepository.findById(id);

    if (!verifyId) {
      throw new AppError("Drone not found");
    }

    const drone = await this.dronesRepository.update(id, {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly,
    });

    return drone;
  }
}

export { UpdateDroneUseCase };
