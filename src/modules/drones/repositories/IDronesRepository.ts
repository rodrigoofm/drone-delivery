import { Drones } from "@prisma/client";

interface ICreateDroneDTO {
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

interface IDronesRepository {
  create({
    id,
    customer_name,
    customer_image,
    customer_address,
    battery,
    max_speed,
    average_speed,
    status,
    current_fly,
  }: ICreateDroneDTO): Promise<Drones>;

  list(): Promise<Drones[]>;

  findById(id: string): Promise<Drones>;

  update(
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
  ): Promise<Drones>;

  delete(id: string): Promise<void>;
}

export { IDronesRepository, ICreateDroneDTO };
