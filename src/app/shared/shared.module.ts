import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    SearchBarComponent,
  ],
  exports: [
    SearchBarComponent,
  ]
})
export class SharedModule { }
