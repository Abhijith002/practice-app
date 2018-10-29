import { EventEmitter } from '@angular/core';

export class SidebarToggle {
  sidebarToggleE = new EventEmitter();
  activeStatus = true;

sidebarToggleStatus() {
  if (this.activeStatus === true) {
    this.activeStatus = false;
  } else {
    this.activeStatus = true;
  }
  }
}
