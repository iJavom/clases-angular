import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { BindingsComponent } from './clases/bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './clases/calculadora/calculadora.component';
import { DirectivesComponent } from './clases/directives/directives.component';
import { ComunicacionComponentsComponent } from './clases/comunicacion-components/comunicacion-components.component';
import { EjemploInputComponent } from './clases/comunicacion-components/ejemplo-input/ejemplo-input.component';
import { EjemploOutputComponent } from './clases/comunicacion-components/ejemplo-output/ejemplo-output.component';
import { CicloVidaComponent } from './clases/ciclo-vida/ciclo-vida.component';
import { ClasesComponent } from './clases/clases.component';
import { MenuComponent } from './clases/menu/menu.component';
import { RoutingComponent } from './clases/routing/routing.component';
import { RHtmlComponent } from './clases/routing/r-html/r-html.component';
import { RTsComponent } from './clases/routing/r-ts/r-ts.component';

@NgModule({
  declarations: [
    AppComponent,
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
    RTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
