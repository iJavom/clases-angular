import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autorMensaje'
})
export class AutorMensajePipe implements PipeTransform {

  transform(value: unknown, autor: string = "Desconocido" ): unknown {
    return `+${autor}: ${value}`;
  }

}
