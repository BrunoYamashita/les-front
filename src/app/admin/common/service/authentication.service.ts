import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

constructor() { 
}
  private _user: any
  private _token: any

  public get token() : string {
    return localStorage.getItem('token')
  }
  
  public set token(v : string) {
    this._token = v;
  }
  
  //Create user interface
  get user(): any {
    return this._user
  }
  
  set user(v: any) {
    this._user = v;
  }

  public validateAuth() {
    return localStorage.getItem('token');
  }

  public logOff() {
    this._token = this._user = null;
    localStorage.clear();
  }

  public setsession(token: any, user){
    this._token = token;
    this._user = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

}
