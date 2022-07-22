import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SubSidenavComponent } from './components/sub-sidenav/sub-sidenav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './components/field/field.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { PersonaDialogComponent } from './components/persona-dialog/persona-dialog.component';



@NgModule({
  declarations: [
    SidenavComponent,
    SubSidenavComponent,
    ComponentViewerComponent,
    FieldComponent,
    FormComponent,
    TableComponent,
    PersonaDialogComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    SharedModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
