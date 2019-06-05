import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthenticationService } from '../common/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private authService: AuthenticationService) { }
  public login: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.loginService.getAuthentication(this.login).subscribe((res) =>{
      this.authService.token = 'aaaa';
      this.authService.user = this.login;
    });
  }
}
