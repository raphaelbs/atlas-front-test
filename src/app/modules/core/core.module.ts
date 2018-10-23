import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LucrosService } from './lucros-service/lucros.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LucrosService
  ]
})
export class CoreModule { }
