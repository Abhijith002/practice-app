import { map } from 'rxjs/operators';
import { AppSettings } from './../../appsettings.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './location.model';

@Injectable()
export class LocationService {
  map: any;
  locations: Location[] = [
    // new Location(111, 12.972442, 77.580643, new Date('2018-12-12T00:00:00')),
    // new Location(111, 12.973278, 77.583154, new Date('2018-12-12T00:00:00')),
    // new Location(111, -111, 110, new Date('2018-12-12T00:00:00'))
  ];

  constructor(private http: HttpClient) { }

  getLocations(vehicleId) {
    const URL = AppSettings.URL + 'tracking/vehiclelocation.php';
    return this.http.get(URL, {
      params: new HttpParams().set('VehicleId', vehicleId)
    });
    // return this.locations;
  }

  getLatitude() {
    return 12.972442;
  }
}
