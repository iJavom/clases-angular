import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes/componentes.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComunicacionComponentsComponent } from './comunicacion-components/comunicacion-components.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases.component';
import { BindingsComponent } from './bindings/bindings.component';
import { RoutingComponent } from './routing/routing.component';
import { RHtmlComponent } from './routing/r-html/r-html.component';
import { RTsComponent } from './routing/r-ts/r-ts.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { FormulariosComponent } from './formularios/formularios.component';


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
    path: '',
    component: ClasesComponent,
    children: [
      { path: 'componentes', component: ComponentesComponent },
      { path: 'binding', component: BindingsComponent },
      { path: 'calculadora', component: CalculadoraComponent },
      { path: 'ciclo-vida', component: CicloVidaComponent },
      { path: 'comunicacion-componentes', component: ComunicacionComponentsComponent },
      { path: 'directivas', component: DirectivesComponent },
      {path:'formularios', component: FormulariosComponent},
      {path:'httpclient', component: HttpclientComponent},
      {path:'pipes', component: PipesComponent},
      { path: 'routing', component: RoutingComponent, children:[
          {path: 'r-html/:nombreParam', component: RHtmlComponent , data:{pepito: 5}},
          {path: 'r-html', component: RHtmlComponent},
          {path: 'r-ts', component: RTsComponent},
          {path: '', redirectTo: 'r-html', pathMatch: 'full'}
        ]
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
