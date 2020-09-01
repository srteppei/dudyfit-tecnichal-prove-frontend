import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignationComponent } from './component/assignation/assignation.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'assignation',
    component: AssignationComponent
  }
];

@NgModule({
  declarations: [AssignationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AssignationModule { }
