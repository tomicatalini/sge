import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'sde',
    loadChildren: () => import('./sde/sde.module').then( m => m.SdeModule)
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path:'menu',
    loadChildren :() => import('./menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: '**',
    redirectTo: 'menu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
