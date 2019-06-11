import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';

@NgModule({
  declarations: [UsersListComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
