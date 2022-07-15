import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './components/persona/persona.component';
import { LocalidadComponent } from './components/localidad/localidad.component';
import { CalleComponent } from './components/calle/calle.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    PersonaComponent,
    LocalidadComponent,
    CalleComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ]
})
export class PersonaModule { }
