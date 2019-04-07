import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../Models/user';

@Component({
  selector: 'st-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  @Input() user: User
  constructor() { }

  ngOnInit() {
  }

}
