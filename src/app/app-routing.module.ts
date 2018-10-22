import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lucros',
    loadChildren: './lucros-view/lucros-view.module#LucrosViewModule'
  },
  {
    path: '',
    redirectTo: 'lucros',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
