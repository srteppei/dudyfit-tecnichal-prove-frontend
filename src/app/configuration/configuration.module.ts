import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './component/trainer/trainer.component';
import { ClientComponent } from './component/client/client.component';



@NgModule({
  declarations: [TrainerComponent, ClientComponent],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule { }
