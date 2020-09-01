import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigurationModule } from './configuration/configuration.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DudyFitApiModule } from './dudy-fit-api/dudy-fit-api.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssignationModule } from './assignation/assignation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ConfigurationModule,
    DudyFitApiModule,
    AssignationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
