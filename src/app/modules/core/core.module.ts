import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './../../components/header/header.component';
import { SideMenuComponent } from './../../components/side-menu/side-menu.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { SideMenuItemComponent } from './../../components/side-menu/side-menu-item/side-menu-item.component';
import { LucrosService } from './lucros-service/lucros.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    FooterComponent,
  ],
  providers: [
    LucrosService
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    FooterComponent,
    RouterModule,
  ]
})
export class CoreModule { }
