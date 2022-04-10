import { Request, Response } from "express";

import { ListDronesUseCase } from "./ListDronesUseCase";

class ListDronesController {
  constructor(private listDronesUseCase: ListDronesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const drones = await this.listDronesUseCase.execute();

    return response.json(drones);
  }
}

export { ListDronesController };
