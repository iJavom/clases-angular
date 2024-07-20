import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu : any[] = [];
  @Input() menuActivo : string = '';
  @Output() menuEscogido = new EventEmitter<string>();

  escogerMenu(urlMenu: string){
    this.menuEscogido.emit(urlMenu);
  }

}
