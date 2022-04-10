import { Request, Response } from "express";

import { UpdateDroneUseCase } from "./UpdateDroneUseCase";

class UpdateDroneController {
  constructor(private updateDroneUseCase: UpdateDroneUseCase) {}

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

    const drone = await this.updateDroneUseCase.execute(id, {
      customer_name,
      customer_image,
      customer_address,
      battery,
      max_speed,
      average_speed,
      status,
      current_fly,
    });

    return response.json(drone);
  }
}

export { UpdateDroneController };
