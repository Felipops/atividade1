import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: Login = new Login();

  router = inject(Router);


  logar(){
    if(this.login.username == 'admin' && this.login.password == 'admin'){
      this.router.navigate(['admin/carros']);
    }else
      alert('não de ucerto'); 
  } 
}
