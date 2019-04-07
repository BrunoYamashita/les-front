import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'


import { Observable } from "rxjs";

import { User } from '../../../models/user';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'st-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  constructor() { }

  clientForm = new FormGroup ({
    name: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    model: new FormControl(''),
  });


  onSubmit(type:String) {
    const formModel = this.clientForm.value;
    console.log(formModel);
  }

  
  ngOnInit() {
  }
}
