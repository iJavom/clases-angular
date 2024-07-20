import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo-input',
  templateUrl: './ejemplo-input.component.html',
  styleUrls: ['./ejemplo-input.component.css']
})
export class EjemploInputComponent {

  @Input() tituloInput = "Hola soy el valor por defecto";

}
