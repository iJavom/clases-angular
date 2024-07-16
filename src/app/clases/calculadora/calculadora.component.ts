import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valorEnPantalla = '';
  operacion = '';
  primerValor = '';


  presionarBoton(caracter: string){
    if(caracter == '+' || caracter == '-' || caracter == '*' || caracter == "/"){
      this.operacion = caracter;
      this.primerValor = this.valorEnPantalla;
      this.valorEnPantalla ="";
    }else if( caracter == "="){
      this.valorEnPantalla = eval(`(+this.primerValor ${this.operacion} +this.valorEnPantalla).toString()`);
      // switch(this.operacion){
      //   case '+': this.valorEnPantalla = (+this.primerValor + +this.valorEnPantalla).toString();
      //   break;
      //   case '-': this.valorEnPantalla = (+this.primerValor - +this.valorEnPantalla).toString();
      //   break;
      //   case '*': this.valorEnPantalla = (+this.primerValor * +this.valorEnPantalla).toString();
      //   break;
      //   case '/': this.valorEnPantalla = (+this.primerValor / +this.valorEnPantalla).toString();
      //   break;
      // }
    }else{
      this.valorEnPantalla += caracter;
    }
  }
}
