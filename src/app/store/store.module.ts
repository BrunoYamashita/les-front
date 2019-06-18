import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreListComponent } from './store-list/store-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/Components/header/header.component';

@NgModule({
  declarations: [
    StoreListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
