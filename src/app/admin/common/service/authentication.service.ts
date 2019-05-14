export class AuthenticationService {
  constructor() { }

  public get token() : string {
    return this.token
  }
  
  public set token(v : string) {
    this.token = v;
  }
  
  //Create user interface
  public get user() : any {
    return this.user
  }

  
  public set user(v : any) {
    this.user = v;
  }

  public validateAuth(token, user) {

  }

  public logOff() {
    this.token = this.user = null;
  }
}
