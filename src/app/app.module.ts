import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './clases/componentes/componentes.component';
import { BindingsComponent } from './clases/bindings/bindings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TiendaComponent } from './tienda/tienda.component';
import { NavbarComponent } from './tienda/navbar/navbar.component';
import { InicioComponent } from './tienda/inicio/inicio.component';
import { ProductosComponent } from './tienda/productos/productos.component';
import { ContactanosComponent } from './tienda/contactanos/contactanos.component';
import { ModelosComponent } from './clases/modelos/modelos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './clases/services/services.component';
import { HttpclientComponent } from './clases/httpclient/httpclient.component';
import { ProductoComponent } from './tienda/producto/producto.component';
import { FormulariosComponent } from './clases/formularios/formularios.component';

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
    RTsComponent,
    TiendaComponent,
    NavbarComponent,
    InicioComponent,
    ProductosComponent,
    ContactanosComponent,
    ModelosComponent,
    NotFoundComponent,
    ServicesComponent,
    HttpclientComponent,
    ProductoComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
