import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPersonaComponent } from './core/components/formulario-persona/formulario-persona.component';
import { TablaComponent } from './core/components/tabla-Persona/tabla.component';
import { DomiciliosComponent } from './core/domicilio/components/domicilios/domicilios.component';
import { FormasComunicacionComponent } from './core/forma-comunicacion/components/formas-comunicacion/formas-comunicacion.component';
import { LocalidadesComponent } from './core/localidades/components/localidades/localidades.component';
import { PersonasComponent } from './core/persona/components/personas/personas.component';

// Iterar sobre las rutas pasadas como parametros ,tienen que ser de tipo ruta
const routes: Routes = [
  { path: 'personas', component: TablaComponent },
  { path: 'personas#', component: FormularioPersonaComponent },
  { path: 'domicilios', component: DomiciliosComponent },
  // { path: 'localidades', component: LocalidadesComponent },
  { path: 'formasComunicacion', component: FormasComunicacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
