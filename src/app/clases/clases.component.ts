import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {

  menuClases = [
    {
      nombre: 'binding',
      url: 'binding'
    },
    {
      nombre: 'calculadora',
      url: 'calculadora'
    },
    {
      nombre: 'ciclo de vida',
      url: 'ciclo-vida'
    },
    {
      nombre: 'componentes',
      url: 'componentes'
    },
    {
      nombre: 'comunicacion componentes',
      url: 'comunicacion-componentes'
    },
    {
      nombre: 'directivas',
      url: 'directivas'
    }
  ]

  menuEscogido = 'componentes';
  

}
