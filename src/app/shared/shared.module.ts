import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
