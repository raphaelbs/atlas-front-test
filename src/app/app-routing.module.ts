import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lucros',
    loadChildren: './lucros-view/lucros-view.module#LucrosViewModule'
  },
  {
    path: 'home',
    loadChildren: './home-view/home-view.module#HomeViewModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
