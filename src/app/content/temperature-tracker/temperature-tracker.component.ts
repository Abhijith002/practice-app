import { Component, OnInit } from '@angular/core';
import { Temperature } from './temperature.model';
import { TemperatureService } from './temperature.service';
import { VehicleService } from './../vehicle.service';

@Component({
  selector: 'app-temperature-tracker',
  templateUrl: './temperature-tracker.component.html',
  styleUrls: ['./temperature-tracker.component.css'],
  providers: [TemperatureService]
})
export class TemperatureTrackerComponent implements OnInit {
  temps: Temperature;
  constructor(private temperature: TemperatureService, private vehicle: VehicleService) { }

  ngOnInit() {
    this.temps = this.temperature.getTemperature();
    this.vehicle.vehicleSelected.subscribe(
      () => {this.temps = this.temperature.getTemperature(); }
    );
  }

}
