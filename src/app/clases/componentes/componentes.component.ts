import { Component } from '@angular/core';

@Component({
  selector: 'app-componentes', //Que es la forma con la que nosotros podemos usar este componente donde nosotros queramos en archivos HTML
  templateUrl: './componentes.component.html',//Template URL sirve para indicar  el archivo donde esta nuestra vista
  // template: '<h1>Hola me escribi desde el component</h1>', //Template sirve para indicar la vista desde nuestro component 
  styleUrls: ['./componentes.component.css']//Sirve para indicar un conjunto de reglas css en archivos que solo se van a aplicar a este component
  // styles :  '', Sirve para indicar reglas css en este archivo
})
export class ComponentesComponent {//La clase del componente, es lo que usamos para poder invocar desde otros modulos o component.ts

    //En la clase nosotros vamos a declarar generalmente ,los propiedades/atributos (variables)
    title = 'clase-angular';
    algunaPropiedad = true;

      //El constructor que forma parte del ciclo de vida de un componente (Esto como concepto de angular) y se ejecuta cuando el componente arranca
  constructor(){ //No es necesario declararlo
    //Generalmente ponemos codigo con el que queremos que arranque nuestro componente o datos inicializados de manera SINCRONA 
  
  }

  //Metodos(Mal llamado funciones por costumbre). Que son aquellos bloques de codigo que podemos reutilizar (Concepto de funciones)


}
