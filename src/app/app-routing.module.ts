import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisponiblesComponent } from './disponibles/disponibles.component';
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

const appRoutes: Routes = [
    {path: '', component: DisponiblesComponent},
    {path: 'inicio', component:DisponiblesComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'inmobiliaria', component:PortafolioComponent},
    {path: 'nosotros', component:NosotrosComponent},
    {path: 'contacto', component:EmpresaComponent},
    {path: 'contactenos', component:ContactoComponent},
    {path: 'gestor', component:GestorComponent}, 
    {path: 'crear', component:CreateComponent},
    {path: 'editar/:id', component:EditarComponent},
    {path: 'cobertura', component:CoberturaComponent},
    {path: 'beneficios', component:BeneficiosComponent},
    {path: 'contable', component:ContableComponent},
    {path: 'tributaria', component:TributariaComponent},
    {path: 'cobranza', component:CobranzaComponent},    
    {path: '**', component:DisponiblesComponent},
];

export const appRoutingProvider: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);