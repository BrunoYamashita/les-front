import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardComponent } from './guard/guard.component';

@NgModule({
  declarations: [LoginComponent, HeaderComponent, HomeComponent, CommonComponent, DashboardComponent, GuardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
