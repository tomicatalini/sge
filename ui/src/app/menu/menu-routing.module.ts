import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SubSidenavComponent } from './components/sub-sidenav/sub-sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path:'sidenav', component: SidenavComponent},
      { path:'sub-sidenav', component: SubSidenavComponent},
      { path:'component-viewer', component: ComponentViewerComponent },
      { path: '**', redirectTo: 'sidenav' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
