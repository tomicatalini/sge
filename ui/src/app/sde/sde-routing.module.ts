import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'persona'
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then( m => m.PersonaModule )
  },
  {
    path: 'expediente',
    loadChildren: () => import('./expediente/expediente.module').then( m => m.ExpedienteModule )
  },
  {
    path:'**',
    redirectTo: 'persona'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdeRoutingModule { }
