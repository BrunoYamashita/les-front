import { HttpClient } from '@angular/common/http';

export abstract class BaseService {
    constructor(private http: HttpClient) {
    }
    protected route;
    abstract setRoute(route: string)

}