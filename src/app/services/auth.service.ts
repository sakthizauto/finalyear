// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/api'; // Replace with your actual backend API URL

    constructor(private http: HttpClient) { }

    signUp(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/signup`, { username, password });
    }

    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, { username, password });
    }
}
