import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SignupserviceService {
    private apiUrl = 'http://localhost:3000/api'; // Update with your Flask server URL
    private signupEndpoint3 = '/signup-user'; // Update with your signup endpoint

    constructor(private http: HttpClient) { }


    signupasuser(email: string, password: string): Observable<any> {
        const userData = { email, password };
        console.log(userData);
        return this.http.post(`${this.apiUrl}${this.signupEndpoint3}`, userData);
    }
}
