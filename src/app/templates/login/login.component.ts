import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    imports: [FormsModule, CommonModule, HttpClientModule],
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    email: string = '';
    password: string = '';
    errorMessage: string = ''; // Mensaje de error para mostrar en la UI

    constructor(
        private authService: AuthService,
        private router: Router // Inyecta Router para manejar redirecciones
    ) { }

    login() {
        this.authService.login(this.email, this.password).toPromise().then(response => {
            sessionStorage.setItem('token', response!!.id);
            this.router.navigate(['/newProperty']); // Uso de Angular Router para la redirección
        }).catch(error => {
            this.errorMessage = error.message; // Manejo de error con mensaje más descriptivo
        });
    }
}
