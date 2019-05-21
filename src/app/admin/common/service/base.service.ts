import { HttpClient } from '@angular/common/http';

export abstract class LoginService {
    constructor(private http: HttpClient) {
    }

    abstract setRoute(route: string)

}