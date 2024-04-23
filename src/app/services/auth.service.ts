import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { newUser } from '../models/newUser.model';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Injectable({
    providedIn: 'root'})
export class AuthService {
    private baseUrl = 'https://gruposjaveriana.dynaco.co/grupo-1-1/user'; // URL base

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/login`, { email, password });
    }

    signUp(user: newUser): Observable<User> {
        return this.http.post<User>(this.baseUrl, user);
    }

    isAuthenticated(): boolean {
        return !!window.sessionStorage.getItem('token');
    }
}
