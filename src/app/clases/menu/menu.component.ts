import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu : any[] = [];
  @Input() menuActivo : string = '';
  @Output() menuEscogido = new EventEmitter<string>();

  constructor(private router : Router){

  }

  escogerMenu(urlMenu: string){
    // this.menuEscogido.emit(urlMenu);
    this.router.navigate([urlMenu]);

  }

}
