import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu =[
    {
      nombre:'Inicio',
      link: '/tienda'
    },
    {
      nombre:'Productos',
      link: '/tienda/productos'
    },
    {
      nombre:'Contactanos',
      link: '/tienda/contactanos'
    },
  ]

}
