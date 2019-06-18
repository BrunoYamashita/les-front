import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../common/service/authentication.service';

@Injectable({providedIn: 'root'})
export class CategoryService {
    private categoryRoute = 'http://localhost:8000/api/categoria';
    constructor(private http: HttpClient,private authenticationService: AuthenticationService) {
    }

    public getCategory() {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.get(this.categoryRoute, {headers});
    }

    public getCategoryById(id: any) {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.get(`${this.categoryRoute}/${id}`, {headers});
    }
    public updateCategory(id:any, body:any) {
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token
        });
        
        return this.http.post(`${this.categoryRoute}/${id}`, body,{headers});
    }
    public createCategory(category: any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.post(this.categoryRoute, category,{headers});
    }

    public deleteCategory(id:any){
        let headers = new HttpHeaders({
            'token_hash': this.authenticationService.token,
        });
        return this.http.delete(`${this.categoryRoute}/${id}`, {headers});
    }
}