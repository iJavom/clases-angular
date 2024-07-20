import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo-output',
  templateUrl: './ejemplo-output.component.html',
  styleUrls: ['./ejemplo-output.component.css']
})
export class EjemploOutputComponent {

  // @Output() unaVariableDisparaEventos : EventEmitter<string> = new EventEmitter<string>(); // No es necesario porque se declara apenas se inicializa
  @Output() unaVariableDisparaEventos = new EventEmitter<string>(); //Lo que esta entre <> es para definir el tipo de respuesta que debemos mandar a nuestro componente padre

  emitirEvento(){
    this.unaVariableDisparaEventos.emit('Un mensaje que viene desde el hijo');
  }

}
