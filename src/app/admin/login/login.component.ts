import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthenticationService } from '../common/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private authService: AuthenticationService) { }
  public signin: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signin = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    this.loginService.getAuthentication(this.signin.value).subscribe((res) =>{
      this.authService.token = res.token;
      this.authService.user = this.signin.value;
      this.router.navigate(['admin/'], {replaceUrl: true});
    }, (error) => {
      console.log(error);
      this.router.navigate(['admin/'], {replaceUrl: true});
    });
  }
}
