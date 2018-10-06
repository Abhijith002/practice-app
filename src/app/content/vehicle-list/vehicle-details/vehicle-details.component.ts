import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicleDetail: Vehicle;
  constructor(private vehicle: VehicleService) {
    this.vehicleDetail = this.vehicle.getSelectedVehicle();
   }

  ngOnInit() {
    this.vehicle.vehicleSelected.subscribe(
    (vehicleId: number) => {
      this.vehicleDetail = this.vehicle.getSelectedVehicle(vehicleId); }
    );
  }
}
