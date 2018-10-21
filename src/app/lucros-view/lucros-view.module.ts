import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LucrosViewComponent } from './lucros-view.component';
import { SharedModule } from '../shared/shared.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/lucros-view/', '.json');
}

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
    HttpClientModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      useDefaultLang: true
    })
  ],
  declarations: [
    LucrosViewComponent
  ],
  exports: [
    RouterModule
  ]
})
export class LucrosViewModule { }
