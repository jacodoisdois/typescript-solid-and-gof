import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log('Starting the engine...');
  }

  configure(color: string, year: number, engine: number): void {
    console.log(`Creating a new Motorcycle: ${color}, ${year}, ${engine}  `);
    this.startVehicle();
  }
}
