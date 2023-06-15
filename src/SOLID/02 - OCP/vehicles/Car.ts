import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log('Starting the engine...');
  }

  configure(
    color: string,
    year: number,
    engine: number,
    seats: number,
    doors: number
  ): void {
    console.log(`Creating a new car: ${color}, ${year}, ${engine}  `);
    this.startVehicle();
  }
}
