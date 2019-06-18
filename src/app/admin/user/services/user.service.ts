import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../common/service/authentication.service';

@Injectable({providedIn: 'root'})
export class UserService {
    private userRoute = 'http://localhost:8000/api/user';
    constructor(private http: HttpClient,private authenticationService: AuthenticationService) {
    }

    public getUsers() {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.get(this.userRoute, {headers});
    }

    public createUser(user: any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.post(this.userRoute, user,{headers});
    }

    public deleteUser(id:any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.delete(`${this.userRoute}/${id}`, {headers});
    }
}