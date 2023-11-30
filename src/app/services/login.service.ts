import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    baseUrl = 'http://localhost:3000/api'; // Update with your Flask server URL

    LoginEndPoint3 = '/login'


    constructor(private http: HttpClient) { }


    loginasuser(email: string, password: string): Observable<any> {
        const userData = { email, password };
        console.log(userData)
        return this.http.post(`${this.baseUrl}${this.LoginEndPoint3}`, userData);
    }
}
