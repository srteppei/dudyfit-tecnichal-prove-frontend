import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TrainerService } from './service/trainer.service';



@NgModule({
  declarations: [TrainerService],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TrainerService]
})
export class DudyFitApiModule { }
