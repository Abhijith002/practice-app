import { Component, OnInit  } from '@angular/core';
import { Vehicle } from './vehicle.model';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  hoverClass;
  selectedVehicleId: number;
  vehicles: Vehicle[] = [];
  constructor(private vehicle: VehicleService) { }

  ngOnInit() {
    this.vehicles = this.vehicle.getVehicleList();
    this.selectedVehicleId = this.vehicle.selectedVehicleID;
    this.hoverClass = 'vehicleInfo';
  }

  onVehicleSelect(vehicleIdL) {
    this.hoverClass = 'vehicleInfo';
    this.vehicle.selectedVehicleID = this.selectedVehicleId = vehicleIdL;
    this.vehicle.vehicleSelected.emit();
  }

  onVehicleFocus() {
    this.hoverClass = 'vehicleInfoAft';
  }
}
