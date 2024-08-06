import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaComponent } from './tienda.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiendaRoutingModule } from './tienda-routing.module';



@NgModule({
  declarations: [
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    ContactanosComponent,
    ProductoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
