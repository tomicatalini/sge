import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomiciliosComponent } from './core/domicilio/components/domicilios/domicilios.component';
import { FormasComunicacionComponent } from './core/forma-comunicacion/components/formas-comunicacion/formas-comunicacion.component';
import { LocalidadesComponent } from './core/localidades/components/localidades/localidades.component';
import { PersonasComponent } from './core/persona/components/personas/personas.component';
import { FormCallerComponent } from './shared/components/form/form-caller/form-caller.component';
import { FormComponent } from './shared/components/form/form.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: 'domicilios', component: DomiciliosComponent },
  { path: 'localidades', component: LocalidadesComponent },
  { path: 'formasComunicacion', component: FormasComunicacionComponent },
  { path: 'formulario', component: FormCallerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
