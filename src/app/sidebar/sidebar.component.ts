import { Component, OnInit, Input } from '@angular/core';
import { SidebarToggle } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private sidebartoggle: SidebarToggle) {}
  ngOnInit() {
    this.sidebartoggle.sidebarToggleE.subscribe(
      () => this.sidebartoggle.sidebarToggleStatus()
    );
  }
  getClass() {
    let sidebarClass;
    if (this.sidebartoggle.activeStatus === true) {
      sidebarClass = 'active';
    } else {
      sidebarClass = '';
    }
    return sidebarClass;
  }
}
