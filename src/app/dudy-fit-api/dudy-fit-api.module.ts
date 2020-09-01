import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TrainerService } from './service/trainer.service';
import { ClientService } from './service/client.service';
import { ClientAssignationService } from './service/client-assignation.service';


@NgModule({
  providers: [TrainerService, ClientService, ClientAssignationService],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class DudyFitApiModule { }
