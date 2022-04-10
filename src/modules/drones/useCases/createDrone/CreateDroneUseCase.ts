import { Drones } from "@prisma/client";

import { AppError } from "../../../../errors/AppError";
import { IDronesRepository } from "../../repositories/IDronesRepository";

interface IRequest {
  id: string;
  customer_name: string;
  customer_image: string;
  customer_address: string;
  battery: number;
  max_speed: number;
  average_speed: number;
  status: string;
  current_fly: number;
}

class CreateDroneUseCase {
  constructor(private dronesRepository: IDronesRepository) {}

  async execute({
    id,
    customer_name,
    customer_image,
    customer_address,
    battery,
    max_speed,
    average_speed,
    status,
    current_fly,
  }: IRequest): Promise<Drones> {
    const droneExists = await this.dronesRepository.findById(id);

    if (droneExists) {
      throw new AppError("This id is already in use");
    }

    const drone = await this.dronesRepository.create({
      id,
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

export { CreateDroneUseCase };
