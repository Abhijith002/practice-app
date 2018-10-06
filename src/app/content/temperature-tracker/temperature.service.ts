import { Injectable, OnInit } from '@angular/core';
import { Temperature } from './temperature.model';
import { VehicleService } from './../vehicle.service';

@Injectable()
export class TemperatureService implements OnInit {
  temps: Temperature = new Temperature(1111, 60, new Date('2018-12-12T00:00:00'));
  selectedVehId: number;
  constructor(private vehicle: VehicleService) {
    // this.selectedVehId = this.vehicle.selectedVehicleID;
   }

  ngOnInit() {
  }
  getTemperature() {
    // if (this.temps.vehicleId === this.vehicle.selectedVehicleID) {
    return this.temps;
    // }
  }
}
