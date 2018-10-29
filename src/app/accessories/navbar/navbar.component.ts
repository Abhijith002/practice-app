import { Component, OnInit } from '@angular/core';
import { SidebarToggle } from '../sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private sidebarToggle: SidebarToggle) { }

  ngOnInit() {
  }

  onSidebarCollapse() {
    this.sidebarToggle.sidebarToggleE.emit();
   }
}
