import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.userService.createUser(this.userForm.value).subscribe((success) => {
      console.log(success);
      this.router.navigate(['admin/home/user'], {replaceUrl: true});
    }, error => {
      console.log("error:" + error);
    })
  }
}
