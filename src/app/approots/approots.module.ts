import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoots: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoots, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
  declarations: []
})

export class ApprootsModule { }
