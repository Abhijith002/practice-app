import { EventEmitter } from '@angular/core';
import { Vehicle } from './vehicle-list/vehicle.model';
import { Subject } from 'rxjs/Subject';

export class VehicleService {
  private vehicles: Vehicle[] = [
    new Vehicle(1111, 1111, 'KA17 9454K', 'Bus1, Bus2, Bus3', 50),
    new Vehicle(1112, 1112, 'KA17 9455K', 'Bus1, Bus2, Bus3', 60),
    new Vehicle(1113, 1113, 'KA17 9456K', 'Bus1, Bus2, Bus3', 70),
    new Vehicle(1114, 1114, 'KA17 9457K', 'Bus1, Bus2, Bus3', 80),
    new Vehicle(1115, 1115, 'KA17 9458K', 'Bus1, Bus2, Bus3', 90)
  ];
  vehicleSelected = new Subject;
  constructor() { }

  getVehicleList() {
    return this.vehicles.slice();
  }

  getSelectedVehicle(vehicleID?: number) {
    if (vehicleID) {
      return this.vehicles.find(v => v.vehicleId === vehicleID);
    } else {
      return this.vehicles[0];
    }
  }
}
