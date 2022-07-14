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
  // { path: 'personaid', component: FormularioPersonaComponent },
  { path: 'personasnew', component: FormularioPersonaComponent },

  { path: 'usuarios', component: TablaComponent },
  // { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'usuariosnew', component: FormularioPersonaComponent },

  { path: 'grupos', component: TablaComponent },
  // { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'gruposnew', component: FormularioPersonaComponent },

  { path: 'accesos', component: TablaComponent },
  // { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'accesosnew', component: FormularioPersonaComponent },

  { path: 'reglas', component: TablaComponent },
  // { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'reglasnew', component: FormularioPersonaComponent },

  { path: 'areas', component: TablaComponent },
  // { path: 'calleid', component: FormularioPersonaComponent },
  { path: 'areasnew', component: FormularioPersonaComponent },

  { path: 'expedientes', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'expedientesnew', component: FormularioPersonaComponent },

  { path: 'enborrador', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'enborradornew', component: FormularioPersonaComponent },

  { path: 'documentos', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'documentosnew', component: FormularioPersonaComponent },

  { path: 'historial', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'historialnew', component: FormularioPersonaComponent },

  { path: 'tiposdeexpedientes', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'tiposdeexpedientesnew', component: FormularioPersonaComponent },

  { path: 'estados', component: TablaComponent },
  // { path: 'expedienteid', component: FormularioPersonaComponent },
  { path: 'estadosnew', component: FormularioPersonaComponent },

  { path: 'configuracion', component: DomiciliosComponent },
  // { path: 'domicilioid', component: DomiciliosComponent },
  { path: 'configuracionnew', component: FormularioPersonaComponent },

  { path: 'usuarios', component: FormasComunicacionComponent },
  // { path: 'formasComunicacionid', component: FormularioPersonaComponent },
  { path: 'usuariosnew', component: FormularioPersonaComponent },

  { path: 'grupos', component: FormasComunicacionComponent },
  // { path: 'archivadosid', component: FormularioPersonaComponent },
  { path: 'gruposnew', component: FormularioPersonaComponent },

  { path: 'accesos', component: DomiciliosComponent },
  // { path: 'pendientesid', component: FormularioPersonaComponent },
  { path: 'accesosnew', component: FormularioPersonaComponent },

  { path: 'reglas', component: TablaComponent },
  // { path: 'enviadosid', component: FormularioPersonaComponent },
  { path: 'reglasnew', component: FormularioPersonaComponent },

  { path: 'areas', component: TablaComponent },
  // { path: 'enviadosid', component: FormularioPersonaComponent },
  { path: 'areasnew', component: FormularioPersonaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
