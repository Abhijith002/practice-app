import { Component, OnInit, OnDestroy } from '@angular/core';
import { Temperature } from './temperature.model';
import { TemperatureService } from './temperature.service';
import { VehicleService } from './../vehicle.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-temperature-tracker',
  templateUrl: './temperature-tracker.component.html',
  styleUrls: ['./temperature-tracker.component.css'],
  providers: [TemperatureService]
})
export class TemperatureTrackerComponent implements OnInit, OnDestroy {
  temps: Temperature;
  subscription: Subscription;
  constructor(private temperature: TemperatureService, private vehicle: VehicleService) { }

  ngOnInit() {
    this.temps = this.temperature.getTemperature();
    this.subscription = this.vehicle.vehicleSelected.subscribe(
      () => {this.temps = this.temperature.getTemperature(); }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
