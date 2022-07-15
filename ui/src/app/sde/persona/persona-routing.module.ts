import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {
    path: '',
    component: PersonaComponent
  },
  {
    path: 'persona',
    component: PersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
