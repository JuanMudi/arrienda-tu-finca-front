import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
    standalone: true,
    imports: [FormsModule],
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    email: string = '';
    password: string = '';

    constructor(
        private authService: AuthService, private router: Router) 
    {
        
    }


    onLogin(){
        // Llamar al servicio de login con el email y contraseña ingresados
        this.authService.login(this.email, this.password).then(response => {
            window.location.href = '/newProperty';
        }, error => {
            console.error(error);
        }   
        )
        console.log(this.email, this.password);
    }
}
