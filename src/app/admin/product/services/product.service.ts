import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../common/service/authentication.service';

@Injectable({providedIn: 'root'})
export class ProductService {
    private productRoute = 'http://localhost:8000/api/produto';
    constructor(private http: HttpClient,private authenticationService: AuthenticationService) {
    }

    public getProducts() {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.get(this.productRoute, {headers});
    }

    public  createProducts(product: any) {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.post(this.productRoute, product, {headers});
    }
}