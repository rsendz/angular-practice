import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotonComponent } from '../../boton/boton.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, BotonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Angular';
  edad = 20;
  suma() {
    this.edad++;
  }
  resta() {
    this.edad--;
  }
  getEdad(data: number) {
    this.edad = data;
  }
}
