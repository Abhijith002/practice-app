import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Vehicle } from './vehicle-list/vehicle.model';
import { AppSettings } from '../appsettings.model';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleService {
  private vehicles: Vehicle[] = [
    // new Vehicle(1111, 1111, 'KA17 9454K', 'Bus1, Bus2, Bus3', 50),
    // new Vehicle(1112, 1112, 'KA17 9455K', 'Bus1, Bus2, Bus3', 60),
    // new Vehicle(1113, 1113, 'KA17 9456K', 'Bus1, Bus2, Bus3', 70),
    // new Vehicle(1114, 1114, 'KA17 9457K', 'Bus1, Bus2, Bus3', 80),
    // new Vehicle(1115, 1115, 'KA17 9458K', 'Bus1, Bus2, Bus3', 90)
  ];
  vehicleSelected = new Subject<number>();
  constructor(private http: HttpClient) { }

  getVehicleList() {
    return this.vehicles.slice();
  }

  getSelectedVehicle(vehicleID?: number) {
    if (vehicleID) {
      return this.vehicles.find(v => v.VehicleId === vehicleID);
    } else {
      return this.vehicles[0];
    }
  }

  getVehiclesForDistributor(distributorID) {
    const URL = AppSettings.URL + 'tracking/vehicleservice.php';
    this.http.get(URL,
      { params: new HttpParams().set('DistributorId', distributorID)}
    ).pipe(map(data => {
      let obj;
      for (const vehicle of data['Vehicle']) {
        obj = new Vehicle(vehicle.VehicleId, vehicle.DistributorId, vehicle.UserId,
                          vehicle.VehicleRegistrartion, vehicle.VehicleName, vehicle.Photo, vehicle.Manufacturer);
        this.vehicles.push(obj);
      }
    })).subscribe();
    return this.vehicles;
  }

  clearVehicles() {
    this.vehicles = [];
  }
}
