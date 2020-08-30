import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './component/trainer/trainer.component';
import { ClientComponent } from './component/client/client.component';
import { LayoutComponent } from './component/layout/layout.component';



@NgModule({
  declarations: [TrainerComponent, ClientComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule { }
