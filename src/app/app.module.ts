import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccessoriesModule } from './accessories/accessories.module';
import { AppComponent } from './app.component';
import { ApprootsModule } from './approots/approots.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AccessoriesModule,
    ApprootsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
