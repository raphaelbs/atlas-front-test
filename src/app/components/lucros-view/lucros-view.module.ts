import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

import { CoreModule } from './../../modules/core/core.module';
import { SharedModule } from './../../modules/shared/shared.module';
import { LucrosViewComponent } from './lucros-view.component';

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
    CoreModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    LucrosViewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class LucrosViewModule { }
