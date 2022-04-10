import { Request, Response } from "express";

import { ListDroneUseCase } from "./ListDroneUseCase";

class ListDroneController {
  constructor(private listDroneUseCase: ListDroneUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const drone = await this.listDroneUseCase.execute(id);

    return response.json(drone);
  }
}

export { ListDroneController };
