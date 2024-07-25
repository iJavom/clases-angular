import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent {

  contador = 0
  @Input() bulto = "Hola";
  contadorInterval = 0;
  intervalFunction :any;

  constructor(){
    //Es lo primero que se ejecuta al generar el componente puesto que es una clase, por ende todo arranca desde aca. Es ideal para dar valores iniciales que de preferencia sean sincronicos
    this.contador++;
    console.log(`Soy el paso 1-Constructor y me invoque en la posicion: ${this.contador}`);
  }

  ngOnChanges(e:any){
    //Lo veremos ejecutado cuando hay algun cambio en nuestro @input (es decir los parametros de comunicacion) 
    //Ademas recibe un parametro con los posibles campos inputs para evaluar sus valores
    this.contador++;
    console.log(`Soy el paso 2-ngOnChanges y me invoque en la posicion: ${this.contador}`);
  }

  ngOnInit(){
    //Sirve para ejecutar una vez que se hayan inicializado todas las propiedades enlazadas de nuestro componente
    //Es ideal para disparar y cargar elementos asincronicos
    this.contador++;
    console.log(`Soy el paso 3-ngOnInit y me invoque en la posicion: ${this.contador}`);
    this.intervalFunction = setInterval(()=>{
      this.contadorInterval++;
      console.log(this.contadorInterval);
    },1000);
  }

  ngDoCheck(){
    //Se invoca durante cada ciclo de deteccion de cambios (ya sea porque cambio un binding o algo en el template)
    //Ideal para implementacion personalizada de cambios
    this.contador++;
    console.log(`Soy el paso 4-ngDoCheck y me invoque en la posicion: ${this.contador}`);
  }

  ngAfterContentInit(){
    //Se llama cada vez que angular proyecte el contenido externo en la vista del componente
    //Ideal para realizar inicializaciones que depende del contenido proyectado
    this.contador++;
    console.log(`Soy el paso 5-ngAfterContentInit y me invoque en la posicion: ${this.contador}`);
  }

  ngAfterContentChecked(){
    //Se ejecuta despues de cada verifacion del contenido proyectado
    //Ideal para la respuesta de los cambios en el contenido proyectado
    this.contador++;
    console.log(`Soy el paso 6-ngAfterContectChecked y me invoque en la posicion: ${this.contador}`);
  }

  ngAfterViewInit(){
    //Se ejecuta despues de que se haya inicializado y verificado las vistas incluidas hijas / secundarias
    //Ideal para inicializar cosas que dependen de la vista del componente
    this.contador++;
    console.log(`Soy el paso 7-ngAfterViewInit y me invoque en la posicion: ${this.contador}`);
  }

  ngAfterViewChecked(){
    //Se ejecuta despues de que se haya inicializado y verificado las vistas del componente
    //Permite la respuesta a los cambios en la vista
    this.contador++;
    console.log(`Soy el paso 8-ngAfterViewChecked y me invoque en la posicion: ${this.contador}`);
  }

  ngOnDestroy(){
    //Se ejecuta ANTES de salir del componente y es ideal para destruir todos esos procesos asincronicos que quedan en nuestro navegador
    this.contador++;
    console.log(`Soy el paso 9-ngOnDestroy y me invoque en la posicion: ${this.contador}`);

    if(this.intervalFunction){
      clearInterval(this.intervalFunction);
    }
  }


}
