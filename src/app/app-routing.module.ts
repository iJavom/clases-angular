import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {path: 'clases',  
    loadChildren: () => import('./clases/clases.module').then((m)=>m.ClasesModule) //De esta forma podemos hacer lazy loading una forma de cargar archivos parcialmente...

  },
  {path:'tienda',loadChildren: () => import('./tienda/tienda.module').then((m)=>m.TiendaModule)},

  // { path: '', component: ComponentesComponent },
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
