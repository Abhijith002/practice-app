import { Component, OnInit, Input } from '@angular/core';
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
    this.vehicleDetail = this.vehicle.selectedVehicleDetails;
   }

  ngOnInit() {
    this.vehicle.vehicleSelected.subscribe(
    () => { this.vehicle.getSelectedVehicle(this.vehicle.selectedVehicleID);
    this.vehicleDetail = this.vehicle.selectedVehicleDetails; }
    );
  }
}
