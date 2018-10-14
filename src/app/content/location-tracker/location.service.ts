import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from './../../appsettings.model';
import { Location } from './location.model';

@Injectable()
export class LocationService {
  map: any;
  locations: Location[] = [];

  constructor(private http: HttpClient) { }

  getLocations(vehicleId) {
    const URL = AppSettings.URL + 'tracking/vehiclelocation.php';
    return this.http.get(URL, {
      params: new HttpParams().set('VehicleId', vehicleId)
    });
  }

  getLatitude() {
    return 12.972442;
  }
}
