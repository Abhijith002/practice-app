import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ApprootsModule } from './approots/approots.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    VehicleListComponent,
    VehicleDetailsComponent,
    TemperatureTrackerComponent,
    LocationTrackerComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApprootsModule
  ],
  providers: [SidebarToggle, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
