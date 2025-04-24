import { Component } from '@angular/core';
import { BotonComponent } from '../../boton/boton.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [BotonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['/home']);
  }
}
