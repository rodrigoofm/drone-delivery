import { Drones } from "@prisma/client";

import { prismaClient } from "../../../../database/client";
import { ICreateDroneDTO, IDronesRepository } from "../IDronesRepository";

class DronesRepository implements IDronesRepository {
  private static INSTANCE: DronesRepository;

  public static getInstance(): DronesRepository {
    if (!DronesRepository.INSTANCE) {
      DronesRepository.INSTANCE = new DronesRepository();
    }

    return DronesRepository.INSTANCE;
  }

  async create({
    id,
    customer_name,
    customer_image,
    customer_address,
    battery,
    max_speed,
    average_speed,
    status,
    current_fly,
  }: ICreateDroneDTO): Promise<Drones> {
    const drone = await prismaClient.drones.create({
      data: {
        id,
        customer_name,
        customer_image,
        customer_address,
        battery,
        max_speed,
        average_speed,
        status,
        current_fly,
      },
    });

    return drone;
  }

  async list(): Promise<Drones[]> {
    const skip = 0;

    const drone = await prismaClient.drones.findMany({
      skip,
      take: 20,
      orderBy: {
        id: "asc",
      },
    });

    return drone;
  }

  async findById(id: string): Promise<Drones> {
    const drone = await prismaClient.drones.findUnique({
      where: { id },
    });

    return drone;
  }

  async update(
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
    }: ICreateDroneDTO
  ): Promise<Drones> {
    const drone = await prismaClient.drones.update({
      where: {
        id,
      },
      data: {
        customer_name,
        customer_image,
        customer_address,
        battery,
        max_speed,
        average_speed,
        status,
        current_fly,
      },
    });

    return drone;
  }

  async delete(id: string): Promise<void> {
    await prismaClient.drones.delete({
      where: {
        id,
      },
    });
  }
}

export { DronesRepository };
