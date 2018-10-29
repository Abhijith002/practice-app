import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutComponent } from './../accessories/about/about.component';
import { ContactComponent } from './../accessories/contact/contact.component';
import { LoginComponent } from './../accessories/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccessoriesrootsModule } from './accessoriesroots/accessoriesroots.module';
import { SidebarToggle } from './sidebar.service';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccessoriesrootsModule
  ],
  providers: [SidebarToggle],
  exports: [ NavbarComponent, SidebarComponent]
})
export class AccessoriesModule { }
