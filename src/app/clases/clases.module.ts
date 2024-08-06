import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes/componentes.component';
import { BindingsComponent } from './bindings/bindings.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivesComponent } from './directives/directives.component';
import { ComunicacionComponentsComponent } from './comunicacion-components/comunicacion-components.component';
import { EjemploInputComponent } from './comunicacion-components/ejemplo-input/ejemplo-input.component';
import { EjemploOutputComponent } from './comunicacion-components/ejemplo-output/ejemplo-output.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases.component';
import { MenuComponent } from './menu/menu.component';
import { RoutingComponent } from './routing/routing.component';
import { RHtmlComponent } from './routing/r-html/r-html.component';
import { RTsComponent } from './routing/r-ts/r-ts.component';
import { ModelosComponent } from './modelos/modelos.component';
import { ServicesComponent } from './services/services.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClasesRoutingModule } from './clases-routing.module';
import { PipesComponent } from './pipes/pipes.component';
import { AutorMensajePipe } from '../shared/pipes/autor-mensaje.pipe';



@NgModule({
  declarations: [
    ComponentesComponent,
    BindingsComponent,
    CalculadoraComponent,
    DirectivesComponent,
    ComunicacionComponentsComponent,
    EjemploInputComponent,
    EjemploOutputComponent,
    CicloVidaComponent,
    ClasesComponent,
    MenuComponent,
    RoutingComponent,
    RHtmlComponent,
    RTsComponent,
    ModelosComponent,
    ServicesComponent,
    HttpclientComponent,
    FormulariosComponent,
    PipesComponent,
    AutorMensajePipe
  ], //Que sirven para poder invocar los componentes, pipes y directivas
  imports: [ //Los import sirven para poder usar otros modulos que vayamos a usar
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClasesRoutingModule
  ], 
  providers: [], // Los provider sirven para definir services o librerias que impliquen la metadata
  exports:[] // Los export sirven para usar elementos de este modulo en otros modulos mediante importaciones
})
export class ClasesModule { }
