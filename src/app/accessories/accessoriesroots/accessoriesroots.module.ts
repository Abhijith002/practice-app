import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './../auth.guard';
import { AuthService } from './../auth.service';
import { LoginComponent } from './../login/login.component';
import { AboutComponent } from './../about/about.component';
import { ContactComponent } from './../contact/contact.component';

const appRoots: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', loadChildren: './../../content/content.module#ContentModule', canLoad: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoots)
  ],
  providers: [AuthGuard, AuthService],
  exports: [RouterModule]
})

export class AccessoriesrootsModule { }
