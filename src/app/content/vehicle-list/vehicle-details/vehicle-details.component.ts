import { Component, OnInit, OnDestroy } from '@angular/core';
import { Vehicle } from '../vehicle.model';
import { VehicleService } from '../../vehicle.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit, OnDestroy {
  vehicleDetail: Vehicle;
  subscription: Subscription;
  constructor(private vehicle: VehicleService) {
    // this.vehicleDetail = this.vehicle.getSelectedVehicle();
    this.vehicleDetail = new Vehicle(0, 0, 0,
      '<Select a vehicle>', '<Select a vehicle>', '<Select a vehicle>', '<Select a vehicle>');
   }

  ngOnInit() {
    this.subscription = this.vehicle.vehicleSelected.subscribe(
    (vehicleId: number) => {
      this.vehicleDetail = this.vehicle.getSelectedVehicle(vehicleId); }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
