import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/users-list/user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersListComponent, UserComponent, UserFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class UserModule { }
