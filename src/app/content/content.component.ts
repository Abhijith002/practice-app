import { Component, OnInit } from '@angular/core';
import { DistributorService } from './distributor.service';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [VehicleService, DistributorService]
})
export class ContentComponent implements OnInit {

  constructor(private vehicle: VehicleService, private distributor: DistributorService) { }

  ngOnInit() {
  }
}
