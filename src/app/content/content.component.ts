import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [VehicleService]
})
export class ContentComponent implements OnInit {

  constructor(private vehicle: VehicleService) { }

  ngOnInit() {
  }

}
