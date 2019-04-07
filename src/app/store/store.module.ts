import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    
  ]
})
export class StoreModule { }
