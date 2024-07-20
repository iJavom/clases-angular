import { Component } from '@angular/core';

@Component({
  selector: 'app-comunicacion-components',
  templateUrl: './comunicacion-components.component.html',
  styleUrls: ['./comunicacion-components.component.css']
})
export class ComunicacionComponentsComponent {

  variableQueMandaraAlHijo = "Soy un variable del padre que se pone en el hijo";
  variableReceptoraDelHijo = "No he recibido nada";
  constructor(){
  }


  metodoReceptorDelOutput(mensajeHijo: string){
    this.variableReceptoraDelHijo = mensajeHijo
  }

  mostrarReferenciaLocal(algo:any){
    console.log(algo);
    debugger;
  }
}
