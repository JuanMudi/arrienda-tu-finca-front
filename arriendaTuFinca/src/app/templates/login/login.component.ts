import { Component} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

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
        private authService: AuthService) 
    {

    }

    login(){
        console.log('Mi método fue llamado');
        window.location.href = '/';
        // Llamar al servicio de login con el email y contraseña ingresados
        this.authService.login(this.email, this.password).then(response => {
            window.location.href = '/newProperty';
        }, error => {
            console.error(error);
        }   
        )
    }
}
