import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './core/components/tabla-Persona/tabla.component';
import { PersonasComponent } from './core/persona/components/personas/personas.component';
import { DynamicListComponent } from './shared/components/dynamic-list/dynamic-list.component';

const routes: Routes = [
  { path: 'personas', component: DynamicListComponent },
  { path: 'personas/new', component: PersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
