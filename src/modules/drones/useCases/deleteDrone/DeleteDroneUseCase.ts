import { AppError } from "../../../../errors/AppError";
import { IDronesRepository } from "../../repositories/IDronesRepository";

class DeleteDroneUseCase {
  constructor(private dronesRepository: IDronesRepository) {}

  async execute(id: string): Promise<void> {
    const verifyId = await this.dronesRepository.findById(id);

    if (!verifyId) {
      throw new AppError("Drone not found!");
    }

    await this.dronesRepository.delete(id);
  }
}

export { DeleteDroneUseCase };
