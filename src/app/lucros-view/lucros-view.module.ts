import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LucrosViewComponent } from './lucros-view.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: LucrosViewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    LucrosViewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class LucrosViewModule { }
