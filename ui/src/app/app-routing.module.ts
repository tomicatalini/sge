import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './core/components/persona/persona.component';
import { DomiciliosComponent } from './core/components/domicilios/domicilios.component';
import { LocalidadesComponent } from './core/components/localidades/localidades.component';

const routes: Routes = [
  {path:'persona',component:PersonaComponent},
  {path:'localidades',component:LocalidadesComponent},
  {path:'domicilios',component:DomiciliosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
