import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { UsersListComponent } from './user/components/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'product', component: ProductListComponent },
          { path: 'users', component: UsersListComponent }
        ]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**',  redirectTo: '/admin/home'},
  { path: '',  redirectTo: '/admin/home'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
