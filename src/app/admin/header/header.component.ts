import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../common/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logoff() {
    this.authenticationService.logOff();
    this.router.navigate(['admin/home/user'], {replaceUrl: true});
  }

}
