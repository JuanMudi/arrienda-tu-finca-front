import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { newUser } from '../models/newUser.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    private baseUrl = 'https://gruposjaveriana.dynaco.co/grupo-1-1/user'; // URL base
    isLoggedIn = false;
  

    constructor(private http: HttpClient) { }
    

    login(email: string, password: string): Observable<User> {
        console.log("Uwunt")
        return this.http.post<User>(`${this.baseUrl}/login`, { email, password });
    }

    signUp(user: newUser): Observable<User> {
        return this.http.post<User>(this.baseUrl, user);
    }

    isAuthenticated(): any {
        try{
        return sessionStorage.getItem('token');
        } catch (error) {
            return null;
        }
    }
}
