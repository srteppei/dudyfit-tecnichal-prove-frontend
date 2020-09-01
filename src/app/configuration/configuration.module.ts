import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerComponent } from './component/trainer/trainer.component';
import { ClientComponent } from './component/client/client.component';
import { LayoutComponent } from './component/layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'configuration',
    component: LayoutComponent,
    children: [
      {
        path: 'trainer',
        component: TrainerComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [TrainerComponent, ClientComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class ConfigurationModule { }
