import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './components/provider-list/provider-list.component';
import { ProviderFormComponent } from './components/provider-form/provider-form.component';
import { ProviderComponent } from './components/provider-list/provider/provider.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ProviderListComponent, ProviderFormComponent, ProviderComponent]
})
export class ProviderModule { }
