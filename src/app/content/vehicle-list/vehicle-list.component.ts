import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Vehicle } from './vehicle.model';
import { VehicleService } from '../vehicle.service';
import { Distributor } from './distributor.model';
import { DistributorService } from './../distributor.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit, OnDestroy {
  hoverClass;
  disableVehicleDrop = true;
  selectedDistributorName: string;
  selectedDistributorID: number;
  selectedVehicleId: number;
  selectedVehicleNo: string;
  distributors: Distributor[] = [];
  vehicles: Vehicle[] = [];
  filterString: any;
  filterDistributors: any;
  distributorSubscription: Subscription;
  constructor(private vehicle: VehicleService, private distributor: DistributorService) { }

  ngOnInit() {
    this.distributors = this.distributor.getDistributors();
    this.vehicles = this.vehicle.getVehicleList();
    this.selectedDistributorID = 0;
    this.selectedDistributorName = 'Choose a Distributor';
    this.selectedVehicleId = 0;
    this.selectedVehicleNo = 'Choose a Vehicle';
    this.hoverClass = 'vehicleInfo';
    this.distributorSubscription = this.distributor.distributorSelected.subscribe((distributorID) => {
      this.vehicle.clearVehicles();
      this.vehicles = this.vehicle.getVehiclesForDistributor(distributorID);
    });
  }

  onVehicleSelect(vehicleIdL, vehicleReg) {
    this.hoverClass = 'vehicleInfo';
    this.selectedVehicleId = +vehicleIdL;
    this.selectedVehicleNo = vehicleReg;
    this.vehicle.vehicleSelected.next(vehicleIdL);
  }

  onVehicleFocus() {
    this.hoverClass = 'vehicleInfoAft';
  }

  onDistributorSelect(distributorIDL, distributorName) {
    this.disableVehicleDrop = false;
    this.selectedDistributorID = +distributorIDL;
    this.selectedDistributorName = distributorName;
    this.distributor.distributorSelected.next(+distributorIDL);
  }

  getDistributors() {
    // this.distributors = this.distributor.getDistributors();
  }

  ngOnDestroy() {
    this.distributorSubscription.unsubscribe();
  }
}
