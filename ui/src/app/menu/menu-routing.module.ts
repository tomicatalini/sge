import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SubSidenavComponent } from './components/sub-sidenav/sub-sidenav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path:'sidenav', component: SidenavComponent },
      { path:'subsidenav', component:SubSidenavComponent },
      { path:'componentviewer', component: ComponentViewerComponent},
      { path: '**', redirectTo: 'sidenav' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
