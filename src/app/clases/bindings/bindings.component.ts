import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {

  unMensaje = "Hola soy un ejemplo"
  botonDesactivado = false;
  placaOculta = true;
  urlImg = 'https://t1.ea.ltmcdn.com/es/posts/1/4/9/alimentacion_y_cuidados_del_husky_siberiano_cachorro_24941_600_square.jpg';

  inputEjemplo ="";

  mensajeDelBoton = "Aprietame para cambiar el mensaje";

  retornarSaludo():string{
    return "https://t1.ea.ltmcdn.com/es/posts/1/4/9/alimentacion_y_cuidados_del_husky_siberiano_cachorro_24941_600_square.jpg";
  }

  metodoEvento(evento: Event){
    this.mensajeDelBoton = (evento.target as HTMLInputElement).value;
  }

}
