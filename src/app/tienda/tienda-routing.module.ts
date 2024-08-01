import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './tienda.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [

  {
    path:'',
    component: TiendaComponent,
    children:[
      {path: 'producto/:id', component: ProductoComponent},
      {path: 'producto', component: ProductoComponent},
      {path: 'productos', component: ProductosComponent},
      {path:'contactanos', component: ContactanosComponent},
      {path:'inicio', component: InicioComponent},
      {path:'', redirectTo: 'inicio', pathMatch: 'full'}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
