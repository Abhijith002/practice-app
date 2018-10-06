import { AuthGuard } from './../auth.guard';
import { ErrorPageComponent } from './../error-page/error-page.component';
import { ContactComponent } from './../contact/contact.component';
import { LoginComponent } from './../login/login.component';
import { AboutComponent } from './../about/about.component';
import { ContentComponent } from './../content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoots: Routes = [
  { path: '', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'home', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorPageComponent, data: {message: 'Please Login!'}},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoots)
  ],
  exports: [RouterModule],
  declarations: []
})
export class ApprootsModule { }
