import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPersonaComponent } from './core/components/formulario-persona/formulario-persona.component';
import { TablaComponent } from './core/components/tabla-Persona/tabla.component';
// import { DomiciliosComponent } from './core/domicilio/components/domicilios/domicilios.component';
// import { FormasComunicacionComponent } from './core/forma-comunicacion/components/formas-comunicacion/formas-comunicacion.component';
// import { LocalidadesComponent } from './core/localidades/components/localidades/localidades.component';
// import { PersonasComponent } from './core/persona/components/personas/personas.component';

const routes: Routes = [
  // { path: 'personas', component: TablaComponent },
  // { path: 'personas/:id', component: FormularioPersonaComponent },
  {
    path: 'auth',
    loadChildren: () => import('./core/auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./core/protected/protected.module').then( m => m.ProtectedModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
  // { path: 'domicilios', component: DomiciliosComponent },
  // { path: 'localidades', component: LocalidadesComponent },
  // { path: 'formasComunicacion', component: FormasComunicacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
