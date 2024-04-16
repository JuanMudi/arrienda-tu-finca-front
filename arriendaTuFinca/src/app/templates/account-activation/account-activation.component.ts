import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account-activation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account-activation.component.html',
  styleUrl: './account-activation.component.css'
})
  export class AccountActivationComponent {

  code: string = '';

  verifyCode()
  {
    if(this.code === '1234')
    {
      window.location.href = '/login';
    }else{
      alert('Código incorrecto');
    } 
  }

}
