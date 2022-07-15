import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';
import { MainComponent } from './components/main/main.component';
import { CalleComponent } from './components/calle/calle.component';
import { LocalidadComponent } from './components/localidad/localidad.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path:'main', 
        component: MainComponent,
        children:[
          {path:'persona', component: PersonaComponent},
          {path:'localidad', component: LocalidadComponent},
          {path:'calle', component: CalleComponent},
          {path:'**', redirectTo: 'persona'}
        ]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
