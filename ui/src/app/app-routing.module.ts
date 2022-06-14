import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './core/components/tabla-Persona/tabla.component';
import { PersonasComponent } from './core/persona/components/personas/personas.component';

const routes: Routes = [
  { path: 'personas', component: TablaComponent },
  { path: 'personas/new', component: PersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
