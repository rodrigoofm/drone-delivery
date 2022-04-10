import { Request, Response } from "express";

import { CreateDroneUseCase } from "./CreateDroneUseCase";

class CreateDroneController {
  constructor(private createDroneUseCase: CreateDroneUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly,
    } = request.body;

    const drone = await this.createDroneUseCase.execute({
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

    return response.status(201).json(drone);
  }
}

export { CreateDroneController };
