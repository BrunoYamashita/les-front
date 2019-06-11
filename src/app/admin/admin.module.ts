import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { ProviderModule } from './provider/provider.module';
import { CategoryModule } from './category/category.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    CommonComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    ProviderModule,
    CategoryModule,
    RouterModule
  ]
})
export class AdminModule { }
