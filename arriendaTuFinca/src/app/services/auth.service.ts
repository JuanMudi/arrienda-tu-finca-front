import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() {}

    private baseUrl = 'https://gruposjaveriana.dynaco.co/grupo-1-1/user/login'; // Define la URL base para el login

    login(email: string, password: string): Promise<User> {
        return axios.post<User>(this.baseUrl, { email, password }).
        then((response => response.data));
    }
}
