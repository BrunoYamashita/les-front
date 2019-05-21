import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

constructor() { 
}
  private _user: any

  public get token() : string {
    return this.token
  }
  
  public set token(v : string) {
    this.token = v;
  }
  
  //Create user interface
  get user(): any {
    return this._user
  }
  
  set user(v: any) {
    this._user = v;
  }

  public validateAuth(token?, user?) {
    return false;
  }

  public logOff() {
    this.token = this.user = null;
  }
}
