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
  { path: 'persona', component: TablaComponent },
  { path: 'personaid', component: FormularioPersonaComponent },
  { path: 'personanew', component: FormularioPersonaComponent },

  { path: 'calle', component: TablaComponent },
  { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'callenew', component: FormularioPersonaComponent },

  { path: 'expediente', component: TablaComponent },
  { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'expedientenew', component: FormularioPersonaComponent },

  { path: 'domicilio', component: DomiciliosComponent },
  { path: 'domicilioid', component: DomiciliosComponent },
  { path: 'domicilionew', component: FormularioPersonaComponent },

  { path: 'formasComunicacion', component: FormasComunicacionComponent },
  { path: 'formasComunicacionid', component: FormularioPersonaComponent },
  { path: 'formasComunicacionnew', component: FormularioPersonaComponent },

  { path: 'archivados', component: FormasComunicacionComponent },
  { path: 'archivadosid', component: FormularioPersonaComponent },
  { path: 'archivadosnew', component: FormularioPersonaComponent },

  { path: 'pendientes', component: DomiciliosComponent },
  { path: 'pendientesid', component: FormularioPersonaComponent },
  { path: 'pendientesnew', component: FormularioPersonaComponent },

  { path: 'enviados', component: TablaComponent },
  { path: 'enviadosid', component: FormularioPersonaComponent },
  { path: 'enviadosnew', component: FormularioPersonaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
