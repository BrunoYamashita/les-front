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

    public getProvidersById(id: any) {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.get(`${this.providerRoute}/${id}`, {headers});
    }

    public updateProvider(id: any, body: any) {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.put(`${this.providerRoute}/${id}`, body ,{headers});
    }

    public createProvider(provider: any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.post(this.providerRoute, provider,{headers});
    }

    public deleteProvider(id:any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.delete(`${this.providerRoute}/${id}`, {headers});
    }
}