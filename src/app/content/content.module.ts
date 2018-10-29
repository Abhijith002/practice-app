import { ContentrootsRoutingModule } from './contentroots/contentroots.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './vehicle-list/filter.pipe';
import { FilterdistributorsPipe } from './vehicle-list/filterdistributors.pipe';
import { ContentComponent } from './content.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle-list/vehicle-details/vehicle-details.component';
import { TemperatureTrackerComponent } from './temperature-tracker/temperature-tracker.component';
import { LocationTrackerComponent } from './location-tracker/location-tracker.component';

@NgModule({
  declarations: [
    ContentComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    TemperatureTrackerComponent,
    LocationTrackerComponent,
    FilterPipe,
    FilterdistributorsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContentrootsRoutingModule
  ]
})
export class ContentModule { }
