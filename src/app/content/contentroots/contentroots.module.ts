import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './../../accessories/auth.guard';
import { ContentComponent } from './../content.component';

const routes: Routes = [
  { path: '', component: ContentComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentrootsRoutingModule { }
