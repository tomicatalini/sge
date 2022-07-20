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
  { path: 'personas/:id', component: FormularioPersonaComponent },
  // { path: 'personasnew', component: FormularioPersonaComponent },

  { path: 'usuarios', component: TablaComponent },
  { path: 'usuarios/:id', component: FormularioPersonaComponent },
  // { path: 'usuariosnew', component: FormularioPersonaComponent },

  { path: 'grupos', component: TablaComponent },
  { path: 'grupos/:id', component: FormularioPersonaComponent },
  // { path: 'gruposnew', component: FormularioPersonaComponent },

  { path: 'accesos', component: TablaComponent },
  { path: 'accesos/:id', component: FormularioPersonaComponent },
  // { path: 'accesosnew', component: FormularioPersonaComponent },

  { path: 'reglas', component: TablaComponent },
  { path: 'reglas/:id', component: FormularioPersonaComponent },
  // { path: 'reglasnew', component: FormularioPersonaComponent },

  { path: 'areas', component: TablaComponent },
  // { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'areas/:id', component: FormularioPersonaComponent },

  { path: 'expedientes', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'expedientes/:id', component: FormularioPersonaComponent },

  { path: 'enborrador', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'enborrador/:id', component: FormularioPersonaComponent },

  { path: 'documentos', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'documentos/:id', component: FormularioPersonaComponent },

  { path: 'historial', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'historial/:id', component: FormularioPersonaComponent },

  { path: 'tiposdeexpedientes', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'tiposdeexpedientes/:id', component: FormularioPersonaComponent },

  { path: 'estados', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'estados/:id', component: FormularioPersonaComponent },

  { path: 'configuracion', component: DomiciliosComponent },
  // { path: 'domicilioid', component: DomiciliosComponent },
  { path: 'configuracion/:id', component: FormularioPersonaComponent },

  { path: 'usuarios', component: FormasComunicacionComponent },
  // { path: 'formasComunicacionid', component: FormularioPersonaComponent },
  { path: 'usuarios/:id', component: FormularioPersonaComponent },

  { path: 'grupos', component: FormasComunicacionComponent },
  // { path: 'archivadosid', component: FormularioPersonaComponent },
  { path: 'grupos/:id', component: FormularioPersonaComponent },

  { path: 'accesos', component: DomiciliosComponent },
  // { path: 'pendientesid', component: FormularioPersonaComponent },
  { path: 'accesos/:id', component: FormularioPersonaComponent },

  { path: 'reglas', component: TablaComponent },
  // { path: 'enviadosid', component: FormularioPersonaComponent },
  { path: 'reglas/:id', component: FormularioPersonaComponent },

  { path: 'areas', component: TablaComponent },
  // { path: 'enviadosid', component: FormularioPersonaComponent },
  { path: 'areas/:id', component: FormularioPersonaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
