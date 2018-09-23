import { Injectable } from '@angular/core';
import { Location } from './location.model';

@Injectable()
export class LocationService {
  locations: Location[] = [
    new Location(111, 12.972442, 77.580643, new Date('2018-12-12T00:00:00')),
    new Location(111, 12.973278, 77.583154, new Date('2018-12-12T00:00:00')),
    new Location(111, -111, 110, new Date('2018-12-12T00:00:00'))
  ];

  constructor() { }

  getLocations() {
    return this.locations.slice();
  }

  getLatitude() {
    return 12.972442;
  }

}
