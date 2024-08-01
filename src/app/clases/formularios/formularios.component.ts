import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  formGroupPepito: FormGroup; //Creamos nuestra variable almacena formulario

  constructor(){
    this.formGroupPepito = new FormGroup({ //Inicializamos y al mismo tiempo creamos los controls
      nombre: new FormControl('',[] ), //los inicializamos de esta forma y podemos ponerle como primer parametro un valor inicial, como segundo parametro un array de validadores Sync y como segundo parametro validadores async
      apellido: new FormControl()

    });
  }


  //Es buena practica tener metodos para acceder de manera mas facil a nuestros formControl
  get nombre(): AbstractControl | null{
    return this.formGroupPepito.get('nombre');
  }
}
