import { Request, Response } from "express";

import { DeleteDroneUseCase } from "./DeleteDroneUseCase";

class DeleteDroneController {
  constructor(private deleteDroneUseCase: DeleteDroneUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteDroneUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteDroneController };
