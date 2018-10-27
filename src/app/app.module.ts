import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { routing, appRoutingProvider } from './app-routing.module';
import { ServiciosComponent } from './servicios/servicios.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CreateComponent } from './create/create.component';
import { GestorComponent } from './gestor/gestor.component';
import { EditarComponent } from './editar/editar.component';
import { CoberturaComponent } from './cobertura/cobertura.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ContableComponent } from './contable/contable.component';
import { TributariaComponent } from './tributaria/tributaria.component';
import { CobranzaComponent } from './cobranza/cobranza.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    DisponiblesComponent,
    ServiciosComponent,
    PortafolioComponent,
    NosotrosComponent,
    EmpresaComponent,
    CreateComponent,
    GestorComponent,
    EditarComponent,
    CoberturaComponent,
    BeneficiosComponent,
    ContableComponent,
    TributariaComponent,
    CobranzaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
