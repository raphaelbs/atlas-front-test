import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatPaginatorI18n } from './mat-paginator-i18n';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      useDefaultLang: true,
    }),
    MatPaginatorModule,
  ],
  declarations: [
    SearchBarComponent,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorI18n }
  ],
  exports: [
    SearchBarComponent,
    TranslateModule
  ]
})
export class SharedModule { }
