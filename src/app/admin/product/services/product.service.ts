import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
    private productRoute = 'http://localhost:8000/produto';
    constructor(private http: HttpClient) {
    }

    public getProducts() {
        // return this.http.get(this.productRoute)
        return new Observable();
    }
}