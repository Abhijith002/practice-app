import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { AppSettings } from './../../appsettings.model';
import { Location } from './location.model';
import { VehicleService } from './../vehicle.service';
import { LocationService } from './location.service';

const H = window['H'];

@Component({
  selector: 'app-location-tracker',
  templateUrl: './location-tracker.component.html',
  styleUrls: ['./location-tracker.component.css'],
  providers: [LocationService]
})
export class LocationTrackerComponent implements OnInit, OnDestroy {
@ViewChild('map') mapContainer: ElementRef;
locations: Location[] = [];
map: any;
timeInterval: Date = new Date();
interval: any;
intervalLoc: any;
subscription: Subscription;
vehicleId: number;
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

constructor(private location: LocationService, private vehicle: VehicleService) { }

  ngOnInit() {
    this.subscription = this.vehicle.vehicleSelected.subscribe(
      (vehicleId: number) => {
        this.vehicleId = vehicleId;
        this.location.getLocations(this.vehicleId).pipe(map(data => {
          let obj;
          for (const item of data['Location']) {
            obj = new Location(item.VehicleId, item.latitude, item.longitude, item.stime);
            this.locations.push(obj);
          }
          if (this.locations.length !== 0) {
          this.map.setCenter({lat: this.locations[0].lat, lng: this.locations[0].long});
        }
        })).subscribe();
      });
    this.calculateInterval();
    this.map = this.initializeMap();
    this.map.getViewPort().resize();   // Resizing map according to viewport
    this.locationProbe();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    clearInterval(this.intervalLoc);
    this.subscription.unsubscribe();
  }

initializeMap() {
  // Initialize the platform object:
  const platform = new H.service.Platform({
    'app_id': 'HqJxlEvPTjDfxlI8TOl3',
    'app_code': 'OvlbcqzZ3H-r61CkYwt-hA',
    'useHTTPS': true,
    'useCIT' : true
    });
    const pixelRatio = window.devicePixelRatio || 1;
    // Obtain the default map types from the platform object
    const maptypes = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });

    // Instantiate (and display) a map object:
    const mapDiztro = new H.Map(
    this.mapContainer.nativeElement,
    maptypes.normal.map,
    {
      zoom: 15,
      center: { lng: 77.580643, lat: this.location.getLatitude() },
      pixelRatio: Math.min(2, devicePixelRatio)
    });
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(mapDiztro));
    const ui = H.ui.UI.createDefault(mapDiztro, maptypes);
    return mapDiztro;
}

createIcon () {
  const icon = new H.map.Icon(AppSettings.URL + 'tracking/custommarker/defaultvehicle.png');
  return icon;
}

calculateInterval() {
  this.interval = setInterval((date: Date) => {
    this.timeInterval = new Date();
    }, 1000);
  }

  locationProbe() {
    const icon = this.createIcon();
    this.intervalLoc = setInterval(() => {
      if (this.vehicleId) {
        this.location.getLocations(this.vehicleId).pipe(map(data => {
          let obj;
          for (const item of data['Location']) {
            obj = new Location(item.VehicleId, item.latitude, item.longitude, item.stime);
            this.locations.push(obj);
          }
          if (this.locations.length !== 0) {
          const diztroMarker = new H.map.Marker({lat: this.locations[0].lat, lng: this.locations[0].long},
                        {icon: icon});
          this.map.addObject(diztroMarker);
        }
        })).subscribe();
      }
    }, 3000);
  }
}
