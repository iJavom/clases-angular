import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  formContactanos : FormGroup; //Aqui creamos el controlador del formulario grupal

  constructor(private formbuilder : FormBuilder){//Inicializamos en el constructor el formBuilder porque necesitamos crear un objeto de ese tipo
    // this.formContactanos = this.formbuilder.group({ //.group() podemos crear nuestro form group con sus respecticos controls
    //   nombre: ['',Validators.required],
    //   email: ['',[Validators.required,Validators.email]],
    //   telefono: [''],
    //   motivo: [''],
    //   mensaje: ['']
    // })
    this.formContactanos = new FormGroup({
      nombre: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      telefono: new FormControl(''),
      motivo: new FormControl(null,Validators.required),
      mensaje: new FormControl('',Validators.required)
    })

    //Si queremos asignar valores tenemos 2 metodos...
    //setValue() -> Sobre el formControl podemos usar el metodo setValue de forma que agrega el valor de manera individual
    this.formContactanos.controls['nombre'].setValue('Me añadi despues de ser creadoooo')
    this.nombre?.setValue('Pise la forma de array asociativo');

    //patchValue() -> Esta forma ofrece la posibilidad de agregar de manera individual o grupal todos los datos que queramos añadir... todo va a depender de las coincidencias del objeto que le pasemos por parametro
    this.formContactanos.patchValue({nombre: 'Cambie el nombre yo solo por patchValue', email: 'pepito@gmail.com'})

    //Otros metodos que podemos usar 
    //agregar validadores
    this.nombre?.addValidators(Validators.minLength(3))
    //remover validadores
    this.nombre?.removeValidators(Validators.minLength(3));


  }


  enviar(){
    alert("El mensaje ha sido enviado")
  }



  get nombre(): AbstractControl | null{
    return this.formContactanos.get('nombre');
  }
  get email(): AbstractControl | null{
    return this.formContactanos.get('email');
  }
  get telefono(): AbstractControl | null{
    return this.formContactanos.get('telefono');
  }
  get motivo(): AbstractControl | null{
    return this.formContactanos.get('motivo');
  }
  get mensaje(): AbstractControl | null{
    return this.formContactanos.get('mensaje');
  }


}
