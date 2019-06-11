import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private users: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) =>{
      this.users = users;
    }, error => {
      console.log(error);
    })
  }

}
