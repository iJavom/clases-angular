import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';
import { DirectivesComponent } from './clases/directives/directives.component';
import { ComunicacionComponentsComponent } from './clases/comunicacion-components/comunicacion-components.component';
import { CicloVidaComponent } from './clases/ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases/clases.component';
import { BindingsComponent } from './clases/bindings/bindings.component';
import { RoutingComponent } from './clases/routing/routing.component';
import { RHtmlComponent } from './clases/routing/r-html/r-html.component';
import { RTsComponent } from './clases/routing/r-ts/r-ts.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';


//En routes nosotros guardamos un conjunto de objetos, con sus respectivas rutas y componentes o modulos
const routes: Routes = [
  //1.- Rutas especificas: Hay rutas que pueden llevar parametros y estas deben ser las primeras en ser declaradas
  //2.- Rutas Generales: Son las rutas que tienden a llevar a componentes
  //3.- Ruta principal: Son las rutas qeu tienen los paths vacios
  //4.- Rutas anidadas: Son aquellas que importan modulos y por ende traspasan la responsabilidad del ruteo a otros ruteadores
  //5.- Ruta 404 / Not Found - No encontrada: Es la ruta que sirve para redirigir cualquier ruta desconocida.


  /*
  Estructura de un route:{
    path:'componente',//-> Un string que sirve para indicar la ruta con la que nosotros podemos acceder al elemento referenciado (componente/modulo) desde nuestra barra de direcciones,
    component: ComponentesComponent//->Component sirve para hacer referencia al componente que vamos a mostrar
    children: [] // ->Sirve para que ese componente que deberia tener un router-outlet tambien pueda definir componentes con los cuales trabajar y rutear
    }
  */
  //Estructura de un route
  {
    path: "clases",
    component: ClasesComponent,
    children: [
      { path: 'componentes', component: ComponentesComponent },
      { path: 'binding', component: BindingsComponent },
      { path: 'calculadora', component: CalculadoraComponent },
      { path: 'ciclo-vida', component: CicloVidaComponent },
      { path: 'comunicacion-componentes', component: ComunicacionComponentsComponent },
      { path: 'directivas', component: DirectivesComponent },
      { path: 'routing', component: RoutingComponent, children:[
          {path: 'r-html/:nombreParam', component: RHtmlComponent , data:{pepito: 5}},
          {path: 'r-html', component: RHtmlComponent},
          {path: 'r-ts', component: RTsComponent},
          {path: '', redirectTo: 'r-html', pathMatch: 'full'}
        ]
      }

    ]
  },
  {
    path:'tienda',
    component: TiendaComponent,
    children:[
      {path: 'productos', component: ProductosComponent},
      {path:'contactanos', component: ContactanosComponent},
      {path:'inicio', component: InicioComponent},
      {path:'', redirectTo: 'inicio', pathMatch: 'full'}
    ]
  },

  { path: '', component: ComponentesComponent },
  {
    path: '**', //El doble asterisco sirve para que cualquier coincidencia tome este objeto
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
