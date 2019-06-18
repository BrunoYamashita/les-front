import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/store/users/Services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:any;
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
  }
  edit() {
    this.router.navigate(['admin/home/provider',this.user.user_id]);
  }

  delete(){
    this.userService.deleteUser(this.user.user_id).subscribe(() =>{
      this.router.navigate(['admin/home/user']);

    })
  }
}
