import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { VehicleListComponent } from './content/vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './content/vehicle-list/vehicle-details/vehicle-details.component';
import { TemperatureTrackerComponent } from './content/temperature-tracker/temperature-tracker.component';
import { LocationTrackerComponent } from './content/location-tracker/location-tracker.component';
import { SidebarToggle } from './sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    TemperatureTrackerComponent,
    LocationTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SidebarToggle],
  bootstrap: [AppComponent]
})
export class AppModule { }
