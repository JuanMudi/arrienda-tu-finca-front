import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { newUser } from '../../models/newUser.model';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user: newUser = new newUser({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  constructor(private authService: AuthService) { }



  signUp() {
    // Llamar al servicio de signUp con los datos ingresados
    this.authService.signUp(this.user).then(response => {
      window.location.href = '/login';
    }, error => {
      console.error(error);
    })

}
}
