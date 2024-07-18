import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  variableIf = true;
  numeros = [1,2,3,4,5,6,7,8,9,10];

  status="En Proceso";

  unaVariable = 5;

  unObjetoCss = {
    'height': this.unaVariable+'em',
    'width': '3em',
    'background-color': 'cyan'
  }

  incrementaHeight(){
    this.unaVariable += 10;
    this.unObjetoCss = {
      'height': this.unaVariable+'em',
      'width': '3em',
      'background-color': 'cyan'
    }
  
  }
}
