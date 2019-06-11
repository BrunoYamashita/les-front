import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../common/service/authentication.service';

@Injectable({providedIn: 'root'})
export class ProviderService {
    private providerRoute = 'http://localhost:8000/api/marca';
    constructor(private http: HttpClient,private authenticationService: AuthenticationService) {
    }

    public getProviders() {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.get(this.providerRoute, {headers});
    }

    public createProvider(provider: any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.post(this.providerRoute, provider,{headers});
    }
}