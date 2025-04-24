import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css',
})
export class BotonComponent {
  @Input({ required: true }) texto = 'Dale click aquí';
  @Input() color = 'green';
  @Output() onClick = new EventEmitter();
  @Output() edad = new EventEmitter<number>();
  clicked() {
    this.onClick.emit();
  }
  getEdad() {
    this.edad.emit(18);
  }
}
