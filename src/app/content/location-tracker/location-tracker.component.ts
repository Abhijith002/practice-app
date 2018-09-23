import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from './location.model';
import { LocationService } from './location.service';

const H = window['H'];

@Component({
  selector: 'app-location-tracker',
  templateUrl: './location-tracker.component.html',
  styleUrls: ['./location-tracker.component.css'],
  providers: [LocationService]
})
export class LocationTrackerComponent implements OnInit {
@ViewChild('map') mapContainer: ElementRef;
locations: Location[] = [];
map: any;
M = {
  'Init' : { // sign up http://developer.here.com for app_id and app_code
      'app_id': 'HqJxlEvPTjDfxlI8TOl3',
      'app_code': 'OvlbcqzZ3H-r61CkYwt-hA',
       useHTTPS: true
  },
  'Behavior' :    {},         // Manage map behaviors
  'Container' :   {},         // Reference to DOM object containing map
  'Lat' :         38.89037,   // Latitude
  'Layers' :      {},         // Map layers
  'Lng' :         -100,       // Longitude
  'Map' :         {},         // Map object
  'Platform' :    {},         // Core to HERE API
  'UI' :          {},         // User interface and interaction
  'Zoom' :        4           // 1 == global, 15 == street level
};

constructor(private location: LocationService) { }

  ngOnInit() {
    this.locations = this.location.getLocations();
    this.map = this.initializeMap();
    let americaMarker = new H.map.Marker({lat: this.location.getLatitude(), lng: 77.580643});
    this.map.addObject(americaMarker);
    // this.map.getViewPort().resize();   // Resizing map according to viewport
    setTimeout(() => {
      this.map.removeObject(americaMarker);
      americaMarker = new H.map.Marker({lat: 12.973278, lng: 77.583154});
      this.map.addObject(americaMarker);
    }, 2000);
  }

initializeMap() {
  // Initialize the platform object:
  const platform = new H.service.Platform({
    'app_id': 'HqJxlEvPTjDfxlI8TOl3',
    'app_code': 'OvlbcqzZ3H-r61CkYwt-hA',
    'useHTTPS': true,
    'useCIT' : true
    });

    // Obtain the default map types from the platform object
    const maptypes = platform.createDefaultLayers({
      // tileSize: 256 * Math.min(2, devicePixelRatio),
      // ppi: devicePixelRatio > 1 ? 320 : 72
    });

    // Instantiate (and display) a map object:
    const map = new H.Map(
    this.mapContainer.nativeElement,
    maptypes.normal.map,
    {
      zoom: 15,
      center: { lng: 77.580643, lat: 12.972442 },
      pixelRatio: Math.min(2, devicePixelRatio)
    });
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, maptypes);
    return map;
}
}
