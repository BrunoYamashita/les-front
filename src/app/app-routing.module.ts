import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './store/store.module#StoreModule'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
  ,
  {
    path: '**',
    loadChildren: './store/store.module#StoreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
