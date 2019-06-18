import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { UsersListComponent } from './user/components/users-list/users-list.component';
import { ProviderListComponent } from './provider/components/provider-list/provider-list.component';
import { ProviderFormComponent } from './provider/components/provider-form/provider-form.component';
import { CategoryListComponent } from './category/components/category-list/category-list.component';
import { ProductFormComponent } from './product/components/product-form/product-form.component';
import { CategoryFormComponent } from './category/components/category-form/category-form.component';
import { UserFormComponent } from './user/user-form/user-form.component';

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
          { path: 'provider/form', component: ProviderFormComponent },
          { path: 'product/form', component: ProductFormComponent },
          { path: 'category/form', component: CategoryFormComponent },
          { path: 'user/form', component: UserFormComponent },
          { path: 'provider/:id', component: ProviderFormComponent },
          { path: 'product/:id', component: ProductFormComponent },
          { path: 'category/:id', component: CategoryFormComponent },
          { path: 'user/:id', component: UserFormComponent },
          { path: 'product', component: ProductListComponent },
          { path: 'provider', component: ProviderListComponent },
          { path: 'category', component: CategoryListComponent },
          { path: 'user', component: UsersListComponent }
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
